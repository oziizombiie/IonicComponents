import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import {Componente} from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  // always use Observable for get something by httpClientModule
  // always create a interface for the object 
  componentes: Observable<Componente []>;
  constructor(private menuCTRL: MenuController, private dService: DataService) { }

  ngOnInit() {
     this.componentes = this.dService.getMenuOptions();
  }
  toggleMenu(){
    this.menuCTRL.open('principalMenu');
  }
}
