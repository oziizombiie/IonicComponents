import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  
  constructor(private loadingController: LoadingController) { }

  loading: any;
  ngOnInit() {
    this.presentLoading('cargando');
    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);
  }


  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      message,
      // duration: 2000,
      spinner: 'bubbles'
    });
    return this.loading.present();
  }


}
