import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styles: []
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
