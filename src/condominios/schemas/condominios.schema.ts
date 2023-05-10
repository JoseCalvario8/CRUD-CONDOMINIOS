import{Prop, Schema, SchemaFactory} from '@nestjs/mongoose'

export type CondominiosDocument=Condominio&Document
@Schema()
export class Condominio{
    @Prop()
    id: string;
    @Prop({required: true})
    nombre: string;
    @Prop({required: true})
    domicilio: string;
    @Prop({required: true})
    coto: string;
    @Prop({required: true})
    propietario: string;
    @Prop()
    arrendador: string;
    @Prop({required: true})
    propietariotel: string;
    @Prop({required: true})
    habitantes: number;
}
export const CondominiosSchema=SchemaFactory.createForClass(Condominio);