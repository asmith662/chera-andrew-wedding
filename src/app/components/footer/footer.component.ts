import { Component, OnInit, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mybreakpoint: number;
  window=window.innerHeight;

  constructor() { }

  ngOnInit(): void {
    
    if (this.window >= 601) this.mybreakpoint = true ? 64 : 1;
    else if (this.window <= 600) this.mybreakpoint = true ? 48 : 1;
    else if (this.window <= 400) this.mybreakpoint = true ? 4 : 1;
    else if (this.window <= 200) this.mybreakpoint = true ? 1 : 4;
  }

  handleSize(event) {
    if (this.window >= 601) this.mybreakpoint = true ? 64 : 1;
    else if (this.window <= 600) this.mybreakpoint = true ? 48 : 1;
    else if (this.window <= 400) this.mybreakpoint = true ? 4 : 1;
    else if (this.window <= 200) this.mybreakpoint = true ? 1 : 1;
  }
}
