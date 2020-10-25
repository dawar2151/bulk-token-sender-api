import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { CreateTokenDto } from './dto/create-token.dto';
import { Token } from './schemas/token.schema';

@Controller('tokens')
export class TokensController {
  constructor(private readonly tokensService: TokensService) {}

  @Post()
  async create(@Body() createTransactionDto: CreateTokenDto) {
    await this.tokensService.create(createTransactionDto);
  }

  @Get('all')
  async findAll(): Promise<Token[]> {
    return this.tokensService.findAll();
  }
  @Get('holder')
  async findByHolder(@Query('holder') holder: string): Promise<Token[]> {
    return this.tokensService.find({holder: holder});
  }

}  