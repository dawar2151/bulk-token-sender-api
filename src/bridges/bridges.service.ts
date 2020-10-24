import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bridge, BridgeDocument } from './schemas/bridge.schema';
import { CreateBridgeDto } from './dto/create-bridge.dto';

@Injectable()
export class BridgesService {
  constructor(@InjectModel(Bridge.name) private tokenModel: Model<BridgeDocument>) {}

  async create(createBridgeDto: CreateBridgeDto): Promise<Bridge> {
    const createdBridge = new this.tokenModel(createBridgeDto);
    return createdBridge.save();
  }

  async findAll(): Promise<Bridge[]> {
    return this.tokenModel.find().exec();
  }
  
}