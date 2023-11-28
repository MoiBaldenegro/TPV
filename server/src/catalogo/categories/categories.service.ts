import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../../schemas/catalogo/categories.schema';
import { CreateCategoryDto } from 'src/dto/catalogo/categories/createCategory.dto';
import { UpdateCategoryDto } from 'src/dto/catalogo/categories/updateCategory.dto';
import { DeleteResult } from 'mongodb';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async findAll() {
    return await this.categoryModel.find().populate('subCategories').exec();
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
}

/*
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../schemas/categories.schema';
import { CreateCategoryDto } from 'src/dto/categories/createCategory.dto';
import { UpdateCategoryDto } from 'src/dto/categories/updateCategory.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel(Category.name) private categoryModel: Model<Category>
    ) {}

    async findAll() {
        return this.categoryModel.find().exec();
    }
/*
    async create(createCategory: CreateCategoryDto) {
        createCategory.code = await this.generateCategoryCode(createCategory.parentCategory);

        const newCategory = new this.categoryModel(createCategory);
        return await newCategory.save();
    }

    async generateCategoryCode(parentCategoryId: string | null): Promise<string> {
        let parentCode = '';
        let level = 1;

        if (parentCategoryId) {
            const parentCategory = await this.categoryModel.findById(parentCategoryId).exec();

            if (parentCategory) {
                parentCode = parentCategory.code;
                level = parentCategory.subCategories.length + 1;
            }
        }

        const formattedLevel = level.toString().padStart(3, '0');
        return `${parentCode}${formattedLevel}`;
    }
 */ /*
    async findOne(id: string) {
        return this.categoryModel.findById(id).exec();
    }

    async delete(id: string) {
        return this.categoryModel.findByIdAndDelete(id).exec();
    }

    async update(id: string, category: UpdateCategoryDto) {
        return this.categoryModel.findByIdAndUpdate(id, category, { new: true }).exec();
    }
}
*/
