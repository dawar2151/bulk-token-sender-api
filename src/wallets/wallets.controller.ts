import { Body, Controller, Get, Post } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { Wallet } from './schemas/wallet.schema';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post()
  async create(@Body() createTransactionDto: CreateWalletDto) {
    await this.walletsService.create(createTransactionDto);
  }

  @Get()
  async findAll(): Promise<Wallet[]> {
    return this.walletsService.findAll();
  }
}  