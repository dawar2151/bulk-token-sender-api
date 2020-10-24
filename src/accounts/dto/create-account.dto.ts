import { IsNotEmpty, IsEthereumAddress } from 'class-validator';

export class CreateAccountDto {
  
    @IsEthereumAddress()
    readonly address: string;
  
  }