import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss']
})
export class ObjectListComponent implements OnInit {

  @Input() data: {[key: string]: string}

  constructor() { }

  ngOnInit(): void {
  }

}
