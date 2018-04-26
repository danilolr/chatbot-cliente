import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

var remoteServiceInstance: RemoteService;

@Injectable()
export class RemoteService {

  constructor(private configService: ConfigService) {
    remoteServiceInstance = this;
  }

  public remote(serviceName: string, methodName: string, params: any): Promise<any> {
    var serverAddr = remoteServiceInstance.configService.obtemEnderecoRemote();
    return new Promise((resolve, reject) => {
      let th = this;
      let xhr = new XMLHttpRequest();
      let url = serverAddr + '/watson-orquestrador/remote/' + serviceName + '/' + methodName;
      xhr.withCredentials = true;
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.onload = function () {
        var result = JSON.parse(xhr.responseText);
        if (result['ok']) {
          resolve(result['result']);
        } else
          alert(result['msg']);
      };
      xhr.onerror = function () {
        alert('Sem comunicacao com o servidor [' + methodName + '] [' + JSON.stringify(params) + '] ' + url);
      };
      let pp = JSON.stringify(params);
      xhr.send(pp);
    });
  }

}
