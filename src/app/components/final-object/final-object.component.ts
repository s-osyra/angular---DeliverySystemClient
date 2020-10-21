import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-object',
  templateUrl: './final-object.component.html',
  styleUrls: ['./final-object.component.scss']
})
export class FinalObjectComponent implements OnInit {

  @Input() map: Map<String, String>

  constructor() { }

  ngOnInit(): void {
  }

}
