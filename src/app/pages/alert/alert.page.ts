import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  canceledTime: number;
  titulo: string;

  constructor( private alertCtrl: AlertController ) {
    this.canceledTime = 0;
   }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          this.canceledTime++;
          console.log('Confirm cancel: blah')
        }
      },{
        text: 'Ok',
        role: 'accept',
        cssClass: 'secondary',
        handler: (blah) => {
          this.canceledTime--;
          console.log('This mothefucka accepts')
        }
      }
    ]
    });

    await alert.present();
  }

  async presentFormAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'inserte un nuevo titulo'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          // this.canceledTime++;
          console.log('Confirm cancel: blah')
        }
      },{
        text: 'Ok',
        role: 'accept',
        cssClass: 'secondary',
        handler: (blah) => {
          // this.canceledTime--;
          this.titulo = blah.titulo;
          console.log('This mothefucka accepts:', blah.titulo)
        }
      }
    ]
    });

    await alert.present();
  }
}
