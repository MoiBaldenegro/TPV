import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { createNoteDto } from 'src/dto/ventas/notes/createNoteDto';
import { updateNoteDto } from 'src/dto/ventas/notes/updateNoteDto';
import { Notes } from 'src/schemas/ventas/notes.schema';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Notes.name) private noteModel: Model<Notes>) {}

  async findAll() {
    return await this.noteModel.find();
  }

  async findOne(id: string) {
    return await this.noteModel.findById(id);
  }

  async create(createNote: createNoteDto) {
    const newNote = new this.noteModel(createNote);
    return await newNote.save();
  }

  async delete(id: string) {
    return await this.noteModel.findByIdAndDelete(id);
  }
  async update(id: string, updatedNote: updateNoteDto) {
    return await this.noteModel.findByIdAndUpdate(id, updatedNote, {
      new: true,
    });
  }
}
