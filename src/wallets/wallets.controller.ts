import { Body, Controller, Get, Post, Param, Query, HttpException, HttpStatus } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { Wallet } from './schemas/wallet.schema';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post()
  async create(@Body() createWalletDto: CreateWalletDto) {
    let address = await this.walletsService.find({address: createWalletDto.address});
    if(address){
      throw new HttpException('Address already exists', HttpStatus.BAD_REQUEST);
    }
    await this.walletsService.create(createWalletDto);
  }

  @Get('all')
  async findAll(): Promise<Wallet[]> {
    return this.walletsService.findAll();
  }

  @Get('holder')
  async find(@Query('holder') holder: string):Promise<Wallet[]>{
    return this.walletsService.find({holder:holder});
  }
}  