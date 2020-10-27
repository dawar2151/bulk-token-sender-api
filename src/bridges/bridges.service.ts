import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bridge, BridgeDocument } from './schemas/bridge.schema';
import { CreateBridgeDto } from './dto/create-bridge.dto';

@Injectable()
export class BridgesService {
  constructor(@InjectModel(Bridge.name) private bridgeModel: Model<BridgeDocument>) {}

  async create(createBridgeDto: CreateBridgeDto): Promise<Bridge> {
    const createdBridge = new this.bridgeModel(createBridgeDto);
    return createdBridge.save();
  }

  async findAll(): Promise<Bridge[]> {
    return this.bridgeModel.find().exec();
  }
  async find(req): Promise<Bridge []>{
    return this.bridgeModel.find(req).exec();
  }
  async findOne(req): Promise<Bridge>{
    return this.bridgeModel.findOne(req).exec();
  }
  async bulkCreate(createBridgesDto: CreateBridgeDto[]): Promise<Bridge[]> {
    const createdBridges = []
    for(let item of createBridgesDto){
      const createdBridge = new this.bridgeModel(item);
      console.log(createdBridge);
      createdBridges.push(createdBridge.save());
    }
    return createdBridges
  }
}