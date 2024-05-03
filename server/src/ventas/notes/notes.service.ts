import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { createNoteDto } from 'src/dto/ventas/notes/createNoteDto';
import { updateNoteDto } from 'src/dto/ventas/notes/updateNoteDto';
import { Bills } from 'src/schemas/ventas/bills.schema';
import { Notes } from 'src/schemas/ventas/notes.schema';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Notes.name) private noteModel: Model<Notes>,
    @InjectModel(Bills.name) private BillsModel: Model<Bills>,
  ) {}

  async findAll() {
    return await this.noteModel.find();
  }

  async findOne(id: string) {
    return await this.noteModel.findById(id);
  }

  async create(createNote: createNoteDto) {
    const lastNote = await this.noteModel
      .findOne({ accountId: createNote.accountId })
      .sort({ createdAt: -1 })
      .exec();
    const nextNoteCode = lastNote
      ? this.getNextNoteCode(lastNote.noteNumber)
      : 1;

    const noteToCreate = new this.noteModel({
      ...createNote,
      noteNumber: nextNoteCode,
    });
    console.log(noteToCreate);

    await noteToCreate.save();
    return noteToCreate;
  }

  async delete(id: string) {
    return await this.noteModel.findByIdAndDelete(id);
  }

  async update(id: string, updatedNote: updateNoteDto, accountId?: string) {
    console.log('ID de la nota');
    console.log(id);
    console.log('La data de la nota par actualizar');
    console.log(updatedNote);
    console.log('ID de la cuenta');
    console.log(accountId);
    if (accountId && accountId != null) {
      console.log('Primeramewnte vemos que entra correctamente añl primer IF');
      console.log(accountId);
      const billCurrent = await this.BillsModel.findById(accountId);
      console.log(
        'Ahora vamos a checar si encontramos la  cuenta correctamente',
      );
      console.log(billCurrent);
      if (billCurrent && billCurrent.notes.length > 0) {
        console.log('Antesw de seguir checamos si entramos al segundo IF');
        console.log(billCurrent);
        console.log('Esta es la nota primera');
        console.log(billCurrent.notes[0]);
        console.log('VER ACAAAAAAAAAAAAAA');
        console.log(updatedNote);
        const upNote = await this.noteModel.findByIdAndUpdate(id, updatedNote, {
          new: true,
        });
        if (upNote) {
          console.log('Por finalo entramos al ultimo IF 3RO');
          const refreshedBill = await this.BillsModel.findById(
            accountId,
          ).populate({ path: 'notes' });
          console.log('Vamos a ver el refresh bill NOTEEES');
          console.log(refreshedBill.notes);

          refreshedBill.notes.forEach((element) => {
            console.log(element.checkTotal);
          });
          const newTotal = refreshedBill.notes.reduce(
            (total, element) => total + parseFloat(element.checkTotal),
            0,
          );
          console.log(
            'Parece ahora ser el problema que no se calcula bien le total',
          );
          console.log(newTotal);

          const refreshData = { checkTotal: newTotal };
          const refreshTotalInBill = await this.BillsModel.findByIdAndUpdate(
            accountId,
            refreshData,
          );
          return refreshTotalInBill;
        }
      }
    }
    console.log('Aca deberia estar cayendo al separar la snotas');
    console.log(
      'y aqui esta el upodateNot eahora que ya esta llegando bine por aca',
    );
    console.log(updatedNote);

    return await this.noteModel.findByIdAndUpdate(id, updatedNote, {
      new: true,
    });
  }
  private getNextNoteCode(lastBillCode: number): number {
    return lastBillCode + 1;
  }
}
