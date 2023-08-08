import * as CryptoJS from 'crypto-js';
import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';

@Injectable()
export class CrytoUtils {
  encryptData(data: string, key: string): string {
    return CryptoJS.AES.encrypt(data, key).toString();
  }

  decryptData(data: string, key: string): string {
    const bytes = CryptoJS.AES.decrypt(data, key);
    if (bytes.sigBytes < 0) {
      throw new Error('Invalid credentials');
    }
    const dataJson = bytes.toString(CryptoJS.enc.Utf8);
    return dataJson;
  }

  encryptPass(data: string, key: string): string {
    key = this.hashKey(key);
    return CryptoJS.AES.encrypt(data, key).toString();
  }

  decryptPass(data: string, key: string): string {
    key = this.hashKey(key);
    const bytes = CryptoJS.AES.decrypt(data, key);
    if (bytes.sigBytes < 0) {
      throw new Error('Invalid credentials');
    }
    const dataJson = bytes.toString(CryptoJS.enc.Utf8);
    return dataJson;
  }

  public hashKey(keyString: string): string {
    const hash = createHash('sha256');
    hash.update(keyString);
    return hash.digest('hex');
  }
}
