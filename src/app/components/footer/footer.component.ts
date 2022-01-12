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
    
    if (this.window >= 601) this.mybreakpoint = true ? 20 : 1;
    else if (this.window <= 600) this.mybreakpoint = true ? 16 : 1;
    else if (this.window <= 400) this.mybreakpoint = true ? 2 : 1;
    else if (this.window <= 200) this.mybreakpoint = true ? 8 : 1;
  }

  handleSize(event) {
    if (this.window >= 601) this.mybreakpoint = true ? 20 : 1;
    else if (this.window <= 600) this.mybreakpoint = true ? 16 : 1;
    else if (this.window <= 400) this.mybreakpoint = true ? 2 : 1;
    else if (this.window <= 200) this.mybreakpoint = true ? 8 : 1;
  }
}
