import { Body, Controller, Get, Post, Param, Query, HttpException, HttpStatus } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { Wallet } from './schemas/wallet.schema';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post()
  async create(@Body() createWalletDto: CreateWalletDto) {
    let wallet = await this.walletsService.findOne({address: createWalletDto.address});
    if(wallet){
      throw new HttpException('Address already exists', HttpStatus.BAD_REQUEST);
    }
    return this.walletsService.create(createWalletDto);
  }
  @Post('bulk')
  async bulkCreate(@Body() createWalletsDto: CreateWalletDto[]) {
    return this.walletsService.bulkCreate(createWalletsDto);
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