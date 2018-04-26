import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RemoteService} from '../../service/remote.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario = '';
  public senha = '';

  constructor(private remoteService: RemoteService, private router: Router) { }

  ngOnInit() {
  }

  async login() {
    const r = await this.remoteService.remote('login', 'login', {usuario: this.usuario, senha: this.senha});
    if (r.autenticado)
      this.router.navigate(['seleciona']);
    else
      alert('Usuário / Senha incorreto');
  }

}
