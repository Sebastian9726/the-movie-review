import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationService } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { ISaveDocumentsService } from './service/save-document.service';
import { SaveDocumentsService } from './service/impl/save-documents/save-documents.service.impl';

@Module({
  imports: [
    CoreModule,
    TerminusModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWTSECRET'),
        signOptions: { expiresIn: configService.get('JWTDURATION') },
      }),
    }),
  ],
  controllers: [
    // controller
  ],
  providers: [
    AuthenticationService,
    { provide: ISaveDocumentsService, useClass: SaveDocumentsService },
  ],
})
export class ControllerModule {}
