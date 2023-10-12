/* import { Injectable } from '@nestjs/common';
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

    findAll(){
       return this.categoryModel.find();
    }

    /* create(createCategory: any){
       const newCtegory = this.categoryModel.create(createCategory);
       return newCtegory;
    } */

    /*

    async create(createCategory: CreateCategoryDto){
        const newCategoryCode = await this.Gen
        const newCategory =  new this.categoryModel(createCategory);
        return await newCategory.save();
     }

    async findOne(id: string) {
        return this.categoryModel.findById(id);
    }

    async delete(id: string) {
       return this.categoryModel.findByIdAndDelete(id);
    }
    async update(id: string, category: UpdateCategoryDto) {
        return this.categoryModel.findByIdAndUpdate ( id, category, { new : true } );
    }



  
}    
 */


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

    findAll() {
        return this.categoryModel.find();
    }

    async create(createCategory: CreateCategoryDto) {
        // Llamar a la función de generación de clave jerárquica
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
                level = await this.categoryModel.countDocuments({ parentCategory: parentCategoryId }) + 1;
            }
        }

        const formattedLevel = level.toString().padStart(3, '0');
        return `${parentCode}${formattedLevel}`;
    }

    async findOne(id: string) {
        return this.categoryModel.findById(id);
    }

    async delete(id: string) {
        return this.categoryModel.findByIdAndDelete(id);
    }

    async update(id: string, category: UpdateCategoryDto) {
        return this.categoryModel.findByIdAndUpdate(id, category, { new: true });
    }
}

