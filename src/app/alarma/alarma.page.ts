import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonicAuthService } from '../ionic-auth.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-alarma',
  templateUrl: './alarma.page.html',
  styleUrls: ['./alarma.page.scss'],
})
export class AlarmaPage implements OnInit {


  estadoAlarma: any = this.obtenerEstado();
  buttonDisabled: boolean = false;



  constructor(private router: Router,
    private ionicAuthService: IonicAuthService,
    private database: AngularFireDatabase,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  obtenerEstado() {
    const path = 'estadoAlarma';
    this.database.object(path).valueChanges().subscribe(res => {
      console.log('estadoAlarma -> ', res);
      this.estadoAlarma = res

      if (this.estadoAlarma == true) {
        this.buttonDisabled = true;
        this.AlertaAlarma();


      } else {
        this.buttonDisabled = false

      }


    });

  }

  toastCtrl: any;
  click() {
    const path = 'estadoAlarma';
    this.database.object(path).set(false).then(res => {
      console.log('Falseando');
      this.presentToast();



    })


  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Alarma desactivada.',
      duration: 32000
    });
    toast.present();
  }
  async AlertaAlarma() {
    const toast = await this.toastController.create({
      header: 'ALERTA',
      message: 'Alarma sonando',
      icon: 'alert',
      position: 'bottom',

      duration: 4000
    });
    toast.present();
  }

}
