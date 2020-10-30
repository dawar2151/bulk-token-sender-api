import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Wallet, WalletDocument } from './schemas/wallet.schema';
import { CreateWalletDto } from './dto/create-wallet.dto';

@Injectable()
export class WalletsService {
  constructor(@InjectModel(Wallet.name) private walletModel: Model<WalletDocument>) {}

  async create(createWalletDto: CreateWalletDto): Promise<Wallet> {
    const createdWallet = new this.walletModel(createWalletDto);
    return createdWallet.save();
  }

  async findAll(): Promise<Wallet[]> {
    return this.walletModel.find().exec();
  }
  async findbyHolder(holder:string): Promise<Wallet[]>{
    return this.walletModel.find({holder: holder}).exec();
  }
  async find(req, limit): Promise<any> {
    return this.walletModel.find(req).limit(parseInt(limit)).exec();
  }
  async findOne(req): Promise<Wallet> {
    return this.walletModel.findOne(req).exec();
  }
  async bulkCreate(createWalletsDto: CreateWalletDto[]): Promise<Wallet[]> {
    const createdWallets = []
    for(let item of createWalletsDto){
      const createdWallet = new this.walletModel(item);
      console.log(createdWallet);
      createdWallets.push(createdWallet.save());
    }
    return createdWallets
  }
}