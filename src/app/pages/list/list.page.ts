import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs/internal/Observable';
import { IonList } from '@ionic/angular';



@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})


export class ListPage implements OnInit {

  @ViewChild('miLista') lista: IonList;

  usuarios: Observable<any>;
  constructor( private dService: DataService ) { }
  favoriteStatus: boolean;
  ngOnInit() {
    this.usuarios = this.getUsers();
  }

  addFavorite(user){
    this.favoriteStatus = !this.favoriteStatus;
    console.log('addFavorite', user);
    this.lista.closeSlidingItems();
  }

  share(user){
    console.log('share:', user);
    this.lista.closeSlidingItems();
  }

  borrar(user){
    console.log('borrar', user);
    this.lista.closeSlidingItems();
  }

  getUsers() {
    return this.dService.getUsers();
  }
}
