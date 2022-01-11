import { Component, OnInit, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mybreakpoint: number;
  constructor() { }

  ngOnInit(): void {
    this.mybreakpoint = (window.innerWidth <= 400) ? 1 : 12;
  }

  handleSize(event) {
    this.mybreakpoint = (event.target.innerWidth <= 400) ? 1 : 12;
  }
}
