import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoItem} from "../../../../to-do-app/src/app/model/TodoItem";
import {PATH_DETAIL} from "../app.routes.constantes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idDetail:string = '1';

  navigateToDetail() {

    this.router.navigate([PATH_DETAIL, this.idDetail]);
  }


  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      console.log('EVENTS', event);
    });
  }
}
