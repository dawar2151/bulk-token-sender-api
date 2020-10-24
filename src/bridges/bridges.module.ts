import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BridgesController } from './bridges.controller';
import { BridgesService } from './bridges.service';
import { Bridge, BridgeSchema } from './schemas/bridge.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bridge.name, schema: BridgeSchema }])],
  controllers: [BridgesController],
  providers: [BridgesService],
})
export class BridgesModule {}