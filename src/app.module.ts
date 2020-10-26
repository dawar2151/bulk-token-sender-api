import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


import { TransactionsModule } from './transactions/transactions.module';
import { TokensModule } from './tokens/tokens.module';
import { BridgesModule } from './bridges/bridges.module';
import { AccountsModule } from './accounts/accounts.module';
import { WalletsModule } from './wallets/wallets.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    TransactionsModule  ,
    TokensModule,
    AccountsModule,
    BridgesModule,
    WalletsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
