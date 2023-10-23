import {
    IsString,
    Length,
    IsOptional
  } from 'class-validator';

export class UpdateBillDto{
    
    @IsOptional()
    @IsString()
    @Length(1, 8)
    billCode?: string;

@IsOptional()
    @IsString()
    @Length(1, 6)
    sellType?: "onSite" | "toGo" | "rappi" | "phone"

    @IsOptional()
    @IsString()
    user?: string;

    @IsOptional()
    @IsString()
    checkTotal?: string;

    @IsOptional()
    @IsString()
    status?: "enabled" | "disabled" | "pending" | "cancel";

    @IsOptional()
    @IsString()
    paymentDate?: string;
}