import { Body, Controller, Get, Post, Query, HttpException, HttpStatus } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { CreateTokenDto } from './dto/create-token.dto';
import { Token } from './schemas/token.schema';

@Controller('tokens')
export class TokensController {
  constructor(private readonly tokensService: TokensService) {}

  @Post()
  async create(@Body() createTokenDto: CreateTokenDto) {
    let token = await this.tokensService.findOne({address: createTokenDto.address});
    if(token){
      throw new HttpException('Token already exists', HttpStatus.BAD_REQUEST);
    }
    await this.tokensService.create(createTokenDto);
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