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
    
    if (this.window >= 600) this.mybreakpoint = true ? 20 : 1;
    else if (this.window >= 590) this.mybreakpoint = true ? 16 : 1;
    else if (this.window >= 580) this.mybreakpoint = true ? 14 : 1;
    else if (this.window >= 570) this.mybreakpoint = true ? 13 : 1;
    else if (this.window >= 560) this.mybreakpoint = true ? 20 : 1;
    else if (this.window >= 550) this.mybreakpoint = true ? 11 : 1;
    else if (this.window >= 540) this.mybreakpoint = true ? 10 : 1;
    else if (this.window >= 530) this.mybreakpoint = true ? 9 : 1;
    else if (this.window >= 520) this.mybreakpoint = true ? 8 : 1;
  }

  handleSize(event) {
    if (this.window >= 600) this.mybreakpoint = true ? 20 : 1;
    else if (this.window >= 590) this.mybreakpoint = true ? 16 : 1;
    else if (this.window >= 580) this.mybreakpoint = true ? 14 : 1;
    else if (this.window >= 570) this.mybreakpoint = true ? 13 : 1;
    else if (this.window >= 560) this.mybreakpoint = true ? 20 : 1;
    else if (this.window >= 550) this.mybreakpoint = true ? 11 : 1;
    else if (this.window >= 540) this.mybreakpoint = true ? 10 : 1;
    else if (this.window >= 530) this.mybreakpoint = true ? 9 : 1;
    else if (this.window >= 520) this.mybreakpoint = true ? 8 : 1;
  }
}
