import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";

@Schema({timestamps: true})
export class Bills{

    @Prop({
        required: true,
        trim: true
    })
    billCode: string;

    @Prop({
        required: true,
        trim: true
    })
    sellType: "onSite" | "toGo" | "rappi" | "phone"

    @Prop({
        required: true,
        trim: true 
    })
    user: string;

    @Prop({
        required: true,
        trim: true
    })
    checkTotal: string;

    @Prop({
        required: true,
    })
    status: "enabled" | "disabled" | "pending" | "cancel"; 

    @Prop({
        required: true,
        trim: true
    })
    paymentDate: string;
    
    // falta la informacion que aparecera en detalles //

}
export const BillSchema = SchemaFactory.createForClass(Bills);