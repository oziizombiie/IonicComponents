import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: UserData [];
  constructor( private http: HttpClient ) {

  }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getMenuOptions(){
    return this.http.get<Componente[]>('assets/data/menu.json');
  }

}
interface UserData {
  username: string;
  email: string;
  phone: number;
}