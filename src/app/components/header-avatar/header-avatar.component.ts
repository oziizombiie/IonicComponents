import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-avatar',
  templateUrl: './header-avatar.component.html',
  styleUrls: ['./header-avatar.component.scss'],
})
export class HeaderAvatarComponent implements OnInit {
  constructor() { }

  @Input() title: string;
  @Input() img: string;
  ngOnInit() {}

}
