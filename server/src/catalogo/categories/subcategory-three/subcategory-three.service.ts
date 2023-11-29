import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';
import { Model } from 'mongoose';
import { CreateCategoryDto } from 'src/dto/catalogo/categories/createCategory.dto';
import { UpdateCategoryDto } from 'src/dto/catalogo/categories/updateCategory.dto';
import { Category } from 'src/schemas/catalogo/categories.schema';
import { SubCategoryThree } from 'src/schemas/catalogo/subcategories/subCategoryThree.Schema';

@Injectable()
export class SubcategoryThreeService {
  constructor(
    @InjectModel(SubCategoryThree.name)
    private subcategoryThreeModel: Model<SubCategoryThree>,
  ) {}
  // categories.service.ts
  async findAll() {
    try {
      return await this.subcategoryThreeModel
        .find()
        .populate({
          path: 'subCategories',
        })
        .exec();
    } catch (error) {
      console.error('Error al buscar categorías:', error);
      throw error;
    }
  }
  /*create(createCategory: any){
       const newCtegory = this.subcategoryThreeModel.create(createCategory);
       return newCtegory;
    } */

  async create(createCategory: CreateCategoryDto) {
    /* const lastCategory = await this.subcategoryThreeModel.findOne(
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
    const newCategory = new this.subcategoryThreeModel(createCategory);
    return await newCategory.save();
  }

  async findOne(id: string) {
    return await this.subcategoryThreeModel.findById(id);
  }

  async delete(id: string) {
    return await this.subcategoryThreeModel.findByIdAndDelete(id);
  }
  async update(id: string, category: UpdateCategoryDto) {
    return await this.subcategoryThreeModel.findByIdAndUpdate(id, category, {
      new: true,
    });
  }

  async replace(): Promise<DeleteResult> {
    return await this.subcategoryThreeModel.deleteMany({}).exec();
  }
}
