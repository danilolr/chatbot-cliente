import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    const workspaceId = this.route.snapshot.paramMap.get('workspace_id');
    alert(workspaceId);
  }

  ngOnInit() {
  }

}
