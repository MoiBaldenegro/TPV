import { IsString } from 'class-validator';

export class CreateTableDto {
  @IsString()
  tableNum?: string;
  @IsString()
  server?: string;
  @IsString()
  status?: string;
  bill?: string[];
}
