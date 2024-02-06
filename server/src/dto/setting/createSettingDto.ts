import { IsOptional } from 'class-validator';
import { Printer } from 'escpos';

export class CreateSettingDto {
  @IsOptional()
  printers?: Printer[];
}
