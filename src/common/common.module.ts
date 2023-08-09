import { Global, Module } from '@nestjs/common';
import { CrytoUtils } from './lib/crypto-utils';

@Global()
@Module({
  imports: [],
  providers: [CrytoUtils],
  exports: [CrytoUtils],
})
export class CommonModule {}
