import { IsString, IsDefined, IsNotEmpty, Length } from 'class-validator';

export class CreateCancellationReasonDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Length(1, 2)
  keyReason: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Length(1, 35)
  reasonName: string;
}
