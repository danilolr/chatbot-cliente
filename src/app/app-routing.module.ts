import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SelecionaDialogoComponent} from './pages/seleciona-dialogo/seleciona-dialogo.component';
import { DialogoComponent } from './pages/dialogo/dialogo.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
},
  {
    path: 'seleciona',
    component: SelecionaDialogoComponent,
  },
  {
    path: 'dialogo/:workspace_id',
    component: DialogoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
