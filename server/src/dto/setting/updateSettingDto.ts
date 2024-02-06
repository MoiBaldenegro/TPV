import { IsOptional } from 'class-validator';
import { Printer } from 'escpos';

export class UpdateSettingDto {
  @IsOptional()
  printers?: Printer[];
}
