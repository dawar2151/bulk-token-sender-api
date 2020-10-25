import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BridgesService } from './bridges.service';
import { CreateBridgeDto } from './dto/create-bridge.dto';
import { Bridge } from './schemas/bridge.schema';

@Controller('bridges')
export class BridgesController {
  constructor(private readonly tokensService: BridgesService) {}

  @Post()
  async create(@Body() createTransactionDto: CreateBridgeDto) {
    await this.tokensService.create(createTransactionDto);
  }

  @Get('all')
  async findAll(): Promise<Bridge[]> {
    return this.tokensService.findAll();
  }
  @Get('holder')
  async find(@Query('from') from: string, @Query('token') token: string):Promise<Bridge[]>{
    return this.tokensService.find({from:from, token:token});
  }
}  