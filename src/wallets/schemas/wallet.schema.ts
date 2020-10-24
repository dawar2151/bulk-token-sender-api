import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsNotEmpty } from 'class-validator';
export type WalletDocument = Wallet & Document;

@Schema()
export class Wallet {

  @Prop({ required: true})
  holder: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  privateKey: string;

}

export const WalletSchema = SchemaFactory.createForClass(Wallet);