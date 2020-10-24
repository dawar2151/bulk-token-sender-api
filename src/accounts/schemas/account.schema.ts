import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsNotEmpty } from 'class-validator';
export type AccountDocument = Account & Document;

@Schema()
export class Account {

  @Prop({ required: true })
  address: string;

}

export const AccountSchema = SchemaFactory.createForClass(Account);