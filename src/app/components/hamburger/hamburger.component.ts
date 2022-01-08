import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
