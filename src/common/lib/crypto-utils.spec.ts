import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { CrytoUtils } from './crypto-utils';

describe('CryptUtils', () => {
  let service: CrytoUtils;
  const key = 'prueba12';

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [CrytoUtils],
    }).compile();

    service = module.get<CrytoUtils>(CrytoUtils);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return decrypted password', async () => {
    const encryptedPassword = service.encryptPass('12345678', key);
    const decryptedPassword = service.decryptPass(encryptedPassword, key);
    expect(decryptedPassword).toBe('12345678');
  });

  it('should return decrypted body', async () => {
    const encryptedBody = service.encryptData('{data: 12345678}', key);
    const decryptedBody = service.decryptData(encryptedBody, key);
    expect(decryptedBody).toBe('{data: 12345678}');
  });

  it('should throw error when password encryption fails', async () => {
    const password = '12345678';
    expect(() => service.decryptPass(password, key)).toThrow(Error);
    expect(() => service.decryptData(password, key)).toThrow(Error);
  });
});
