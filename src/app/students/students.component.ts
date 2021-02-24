import { Component, OnInit } from '@angular/core';
// import { BreakpointObserver,Breakpoints} from '@angular/cdk/layout';
// import {Observable} from 'rxjs';
// import { map } from 'rxjs/operators';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  // isHandset$:Observable<Boolean>=this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(result=>result.matches)
  // )

  constructor() { }

  ngOnInit(): void {
  }

}
