import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Token, TokenDocument } from './schemas/token.schema';
import { CreateTokenDto } from './dto/create-token.dto';

@Injectable()
export class TokensService {
  constructor(@InjectModel(Token.name) private tokenModel: Model<TokenDocument>) {}

  async create(createTokenDto: CreateTokenDto): Promise<Token> {
    const createdToken = new this.tokenModel(createTokenDto);
    return createdToken.save();
  }

  async findAll(): Promise<Token[]> {
    return this.tokenModel.find().exec();
  }
  async find(req): Promise<any> {
    return await this.tokenModel.find(req).exec();
  }
  
}