import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonicAuthService } from '../ionic-auth.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  registros: Registros[] = [];

  constructor(private router: Router,
    private ionicAuthService: IonicAuthService,
    private database: AngularFireDatabase) { }

  ngOnInit() {
    const path = 'RegistrosAlarma/';
    this.database.list<Registros>(path,ref=> ref.limitToLast(5)).valueChanges().subscribe(res => {
      console.log('registros -> ', res);
      this.registros = res;
      this.registros.reverse();
    })
  }

}

interface Registros{
  DistanciaActivada: number;
  Fecha: number;
}
