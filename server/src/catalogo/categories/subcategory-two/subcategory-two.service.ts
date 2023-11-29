import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';
import { Model } from 'mongoose';
import { CreateCategoryDto } from 'src/dto/catalogo/categories/createCategory.dto';
import { UpdateCategoryDto } from 'src/dto/catalogo/categories/updateCategory.dto';
import { SubCategoryOne } from 'src/schemas/catalogo/subcategories/subCategoryOne.Schema';
import { SubCategoryTwo } from 'src/schemas/catalogo/subcategories/subCategoryTwo.schema';

@Injectable()
export class SubcategoryTwoService {
  constructor(
    @InjectModel(SubCategoryTwo.name)
    private subcategoryTwoModel: Model<SubCategoryTwo>,
  ) {}

  async findAll() {
    return await this.subcategoryTwoModel.find();
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
    const newCategory = new this.subcategoryTwoModel(createCategory);
    return await newCategory.save();
  }

  async findOne(id: string) {
    return await this.subcategoryTwoModel.findById(id);
  }

  async delete(id: string) {
    return await this.subcategoryTwoModel.findByIdAndDelete(id);
  }
  async update(id: string, category: UpdateCategoryDto) {
    return await this.subcategoryTwoModel.findByIdAndUpdate(id, category, {
      new: true,
    });
  }

  async replace(): Promise<DeleteResult> {
    return await this.subcategoryTwoModel.deleteMany({}).exec();
  }
}
