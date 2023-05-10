import { IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

export class CreateCondominioDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    domicilio: string;

    @IsString()
    @IsNotEmpty()
    coto: string;
    
    @IsString()
    @IsNotEmpty()
    propietario: string;

    @IsString()
    @IsOptional()
    arrendador: string;
    
    @IsString()
    @IsNotEmpty()
    propietariotel: string;

    @IsNumber()
    @IsNotEmpty()
    habitantes: number;
}
