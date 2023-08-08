import { Global, Module } from '@nestjs/common';
import { CacheJWTModule } from '../data-provider/cache-jwt-token/cache-jwt.module';
import { CrytoUtils } from './lib/crypto-utils';

@Global()
@Module({
  imports: [CacheJWTModule],
  providers: [CrytoUtils],
  exports: [CrytoUtils, CacheJWTModule],
})
export class CommonModule {}
