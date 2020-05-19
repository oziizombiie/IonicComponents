import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { HeaderAvatarComponent } from './header-avatar/header-avatar.component';
import { HeaderLikeComponent } from './header-like/header-like.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, HeaderAvatarComponent, HeaderLikeComponent, MenuComponent],
  exports: [HeaderComponent, HeaderAvatarComponent, HeaderLikeComponent, MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
