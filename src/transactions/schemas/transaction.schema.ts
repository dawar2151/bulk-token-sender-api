import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsNotEmpty } from 'class-validator';
export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {

  
  @Prop({ required: true})
  txid: string;

  @Prop({ required: true })
  from: string;

  @Prop({ required: true })
  to: string;

  @Prop({ required: true })
  to_bridge: boolean;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);