import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Get()
  async findAll(): Promise<Token[]> {
    return this.tokensService.findAll();
  }
}  