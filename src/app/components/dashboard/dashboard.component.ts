import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getDatabase, ref, push, set } from 'firebase/database';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dataUser: any;
  users: any[] = [];
  form!: FormGroup;
  fecha!: Date[];
  minDate: Date = new Date();
  maxDate: Date = new Date();
  defaultDate: Date = new Date();
  database = getDatabase();
  citasReg = ref(this.database, 'citas');
  emailU!: any;
  tabla: string[] = [
    'ID', 'Email'
  ];

  constructor(private afAuth: AngularFireAuth, private router: Router, private http: HttpClient) {
    this.form = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      salaS: new FormControl('', Validators.required),
      peli: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
    this.minDate.setHours(9, 0, 0);
    this.maxDate.setHours(21, 0, 0);
    this.defaultDate.setHours(9);
    this.defaultDate.setMinutes(0);
    this.defaultDate.setSeconds(0);
    this.fecha = this.getDisabledDates(new Date());
  }

  ngOnInit(): void {
    this.afAuth.currentUser.then((user) => {
      /*if(user && user.emailVerified) {
        this.dataUser = user;
        console.log(user)
      } else {
        this.router.navigate(['/login']);
      }*/
      this.dataUser = user;
      this.emailU = user?.email;
    });
    const urapi = `https://users-fmyn.onrender.com`;
    this.http.get<any[]>(urapi)
      .subscribe((data) => {
        this.users = data;
      });
  }

  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }

  disabledDates = (date: Date) => {
    const currentDate = new Date();
    const disabledDates = Array.from(
      {
        length: Math.ceil(
          (date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
        ),
      },
      (_, index) =>
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + index
        )
    );
    return disabledDates;
  };
  getDisabledDates(date: Date): Date[] {
    return this.disabledDates(date);
  }
  guardarCambios(): void {
    const citasReg2 = push(this.citasReg);
    set(citasReg2, {
      uid: this.form.value.nombre,
      email: this.form.value.correo,
      cinema: this.form.value.salaS,
      movieName: this.form.value.peli,
      date: this.form.value.date,
    });
  }
}
