import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  characters = ['deadpool', 'spider-man', 'hulk', 'wolverine', 'constantine'];

  constructor() { }

  ngOnInit() {
  }

  reorded(e){
    e.detail.complete(this.characters);
  }

  onClick(){
    console.log(this.characters);
  }

}
