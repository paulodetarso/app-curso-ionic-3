import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {

  config = {
    hideIntroPage: false
  };

  protected configLocalStorageKey = 'config';

  getConfig(): any {
    return localStorage.getItem(this.configLocalStorageKey);
  }

  setConfig(key: string, newValue: any): void {
    if (this.config.hasOwnProperty(key)) {
      this.config[key] = newValue;
      localStorage.setItem(this.configLocalStorageKey, JSON.stringify(this.config));
    } else {
      console.warn('A chave `' + key + '` não existe no mapa de configurações!');
    }
  }
}
