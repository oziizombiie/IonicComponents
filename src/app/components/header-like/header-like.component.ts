import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-like',
  templateUrl: './header-like.component.html',
  styleUrls: ['./header-like.component.scss'],
})
export class HeaderLikeComponent implements OnInit {
  favoriteStatus: boolean;
  @Input() title: string;
  constructor() { }

  ngOnInit() {}

  addFavorite(){
    this.favoriteStatus = !this.favoriteStatus;
  }
}
