import { IsNotEmpty, IsEthereumAddress } from 'class-validator';

export class CreateTokenDto {
    @IsEthereumAddress()
    readonly wallet: string;//owner

    @IsEthereumAddress()
    readonly address: string;
    
    @IsNotEmpty()
    readonly symbol: string;
    
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly decimals: number;

    @IsNotEmpty()
    readonly totalSupply: number;
  }