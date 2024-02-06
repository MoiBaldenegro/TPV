import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreateDeviceDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  deviceIdn: string;
}
