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

    findAll(){
       return this.categoryModel.find();
    }

    /* create(createCategory: any){
       const newCtegory = this.categoryModel.create(createCategory);
       return newCtegory;
    } */

    async create(createCategory: CreateCategoryDto){
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
        return this.categoryModel.findByIdAndUpdate(id, category, { new : true });
    }



  
}


