import { Body, Controller, Get, Post, HttpStatus, HttpException } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './schemas/account.schema';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    let address = await this.accountsService.find({address: createAccountDto.address});
    if(address){
      throw new HttpException('Address already exists', HttpStatus.BAD_REQUEST);
    }
    await this.accountsService.create(createAccountDto);
  }

  @Get()
  async findAll(): Promise<Account[]> {
    return this.accountsService.findAll();
  }
}  