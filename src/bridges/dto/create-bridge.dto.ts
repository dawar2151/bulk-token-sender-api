import { IsNotEmpty, IsEthereumAddress } from 'class-validator';

export class CreateBridgeDto {
    @IsNotEmpty()
    readonly txid: string;

    @IsEthereumAddress()
    readonly from: string;

    @IsEthereumAddress()
    readonly to: string;
    
    @IsEthereumAddress()
    readonly token: string;

    @IsNotEmpty()
    readonly value: number;

  }