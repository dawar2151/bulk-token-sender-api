import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Get()
  async findAll(): Promise<Bridge[]> {
    return this.tokensService.findAll();
  }
}  