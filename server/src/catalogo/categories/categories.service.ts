import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../../schemas/catalogo/categories.schema';
import { CreateCategoryDto } from 'src/dto/catalogo/categories/createCategory.dto';
import { UpdateCategoryDto } from 'src/dto/catalogo/categories/updateCategory.dto';
import { DeleteResult } from 'mongodb';
import { SubCategoryOne } from 'src/schemas/catalogo/subcategories/subCategoryOne.Schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
    @InjectModel(SubCategoryOne.name)
    private subcategoryOneModel: Model<SubCategoryOne>,
  ) {}
  // categories.service.ts
  async findAll() {
    try {
      return await this.categoryModel
        .find()
        .populate({
          path: 'subCategories',
          populate: {
            path: 'subCategories',
            populate: {
              path: 'subCategories',
              populate: {
                path: 'subCategories',
              },
            },
          },
        })
        .exec();
    } catch (error) {
      console.error('Error al buscar categorías:', error);
      throw error;
    }
  }
  /*create(createCategory: any){
       const newCtegory = this.categoryModel.create(createCategory);
       return newCtegory;
    } */

  async create(createCategory: CreateCategoryDto) {
    /* const lastCategory = await this.categoryModel.findOne(
      {},
      { code: 1 },
      { sort: { code: -1 } },
    ); // encontramos la ultima categoria creada
    let newCode: string;
    if (lastCategory) {
      const lastCode = lastCategory.code;
      const nextNumber = lastCode + 1;
      newCode = nextNumber.toString().padStart(2, '0'); // Asegura que el código tenga al menos 2 dígitos.
    } else {
      newCode = '01';
    }
    console.log(newCode);
    createCategory.code = newCode; */
    const newCategory = new this.categoryModel(createCategory);
    return await newCategory.save();
  }

  async findOne(id: string) {
    return await this.categoryModel.findById(id);
  }

  async delete(id: string) {
    return await this.categoryModel.findByIdAndDelete(id);
  }

  async update(id: string, category: UpdateCategoryDto) {
    return await this.categoryModel.findByIdAndUpdate(id, category, {
      new: true,
    });
  }

  async replace(): Promise<DeleteResult> {
    return await this.categoryModel.deleteMany({}).exec();
  }

  async discontinue(id: string, category: UpdateCategoryDto) {
    // Actualiza la categoría principal
    const updatedCategory = await this.categoryModel.findByIdAndUpdate(
      id,
      category,
      {
        new: true,
      },
    );

    // Si la categoría principal no existe, lanza una excepción
    if (!updatedCategory) {
      throw new NotFoundException('Categoría no encontrada');
    }

    // Actualiza recursivamente las subcategorías
    await this.updateSubcategoriesStatus(
      updatedCategory.subCategories,
      category.status,
    );

    return updatedCategory;
  }

  private async updateSubcategoriesStatus(
    subcategories: any[],
    status: string,
  ) {
    for (const subcategory of subcategories) {
      // Actualiza el estado de la subcategoría
      if (subcategory.status === 'disabled') {
        continue;
      }
      await this.subcategoryOneModel.findByIdAndUpdate(subcategory._id, {
        status,
      });
    }
  }
}
