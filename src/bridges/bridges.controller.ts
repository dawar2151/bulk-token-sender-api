import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BridgesService } from './bridges.service';
import { CreateBridgeDto } from './dto/create-bridge.dto';
import { Bridge } from './schemas/bridge.schema';

@Controller('bridges')
export class BridgesController {
  constructor(private readonly bridgesService: BridgesService) {}

  @Post()
  async create(@Body() createTransactionDto: CreateBridgeDto) {
    await this.bridgesService.create(createTransactionDto);
  }

  @Get('all')
  async findAll(): Promise<Bridge[]> {
    return this.bridgesService.findAll();
  }
  @Get('holder')
  async find(@Query('from') from: string, @Query('token') token: string):Promise<Bridge[]>{
    return this.bridgesService.find({from:from, token:token});
  }
  @Post('bulk')
  async bulkCreate(@Body() createBridgesDto: CreateBridgeDto[]) {
    return this.bridgesService.bulkCreate(createBridgesDto);
  }
}  