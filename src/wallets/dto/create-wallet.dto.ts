import { IsNotEmpty, IsEthereumAddress } from 'class-validator';

export class CreateWalletDto {
  
    @IsEthereumAddress()
    readonly holder: string;//owner

    @IsEthereumAddress()
    readonly address: string;
    
    @IsNotEmpty()
    readonly privateKey: string;
  }