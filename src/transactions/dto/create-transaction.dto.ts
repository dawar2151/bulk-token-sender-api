import { IsNotEmpty, IsEthereumAddress } from 'class-validator';

export class CreateTransactionDto {
    @IsNotEmpty()
    readonly txid: string;

    @IsEthereumAddress()
    readonly from: string;
    
    @IsEthereumAddress()
    readonly to: string;
    
    @IsNotEmpty()
    readonly to_bridge: boolean;
  }