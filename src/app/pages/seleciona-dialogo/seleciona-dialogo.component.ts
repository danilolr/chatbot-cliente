import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../../service/remote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleciona-dialogo',
  templateUrl: './seleciona-dialogo.component.html',
  styleUrls: ['./seleciona-dialogo.component.css']
})
export class SelecionaDialogoComponent implements OnInit {

  private chats = [];

  constructor(private remoteService: RemoteService, private router: Router) { }

  async ngOnInit() {
    this.chats = await this.remoteService.remote('watson', 'listaChatDisponiveis', {});
  }

  selecionado(rec: any) {
    this.router.navigateByUrl('/dialogo/' + rec.workspaceId, { skipLocationChange: true });
  }

}
