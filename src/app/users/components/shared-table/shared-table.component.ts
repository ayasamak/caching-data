import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss']
})
export class SharedTableComponent {
@Input() items:any=[]
@Input() page:number=0
@Input() totalItems:number=0
@Input() itemsPerPage:number=0

}
