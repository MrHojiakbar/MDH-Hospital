import { CreateAmbulance } from "./CreateAmbulance.dto";
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAmbulance extends PartialType(CreateAmbulance){}