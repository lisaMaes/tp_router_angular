import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PATH_HOME} from "../app.routes.constantes";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) { }


  navigateToHome() {
    this.router.navigate([PATH_HOME]);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      console.log('EVENTS', event);
    });
    this.route.paramMap.subscribe((params: ParamMap)=>{
      console.log('isDetail', params.get('idDetail'));
    });
    console.log('idDetail snapshot', this.route.snapshot.paramMap.get('idDetail')); 2
  }

}
