import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsNotEmpty } from 'class-validator';
export type BridgeDocument = Bridge & Document;

@Schema()
export class Bridge {

  @Prop({ required: true})
  txid: string;

  @Prop({ required: true })
  from: string;

  @Prop({ required: true })
  to: string;

  @Prop({ required: true })
  token: string;
  
  @Prop({ required: true })
  value: number;

}

export const BridgeSchema = SchemaFactory.createForClass(Bridge);