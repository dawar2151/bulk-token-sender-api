import { IsEthereumAddress } from 'class-validator';

export class CreateAccountDto {
  
    @IsEthereumAddress()
    readonly address: string;
  
  }