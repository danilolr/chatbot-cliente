import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  public obtemEnderecoRemote(): string {
    return 'http://watson.ascendants.com.br';
  }

}
