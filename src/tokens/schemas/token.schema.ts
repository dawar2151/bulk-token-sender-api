import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsNotEmpty } from 'class-validator';
export type TokenDocument = Token & Document;

@Schema()
export class Token {

  
  @Prop({ required: true})
  wallet: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  symbol: string;

  @Prop({ required: true })
  name: string;
  
  @Prop({ required: true })
  decimals: number;

  @Prop({ required: true })
  totalSupply: number;

}

export const TokenSchema = SchemaFactory.createForClass(Token);