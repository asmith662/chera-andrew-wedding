import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {'image': '../../../assets/img/ca3.jpg'}, 
    {'image': '../../../assets/img/ca5.jpg'},
    {'image': '../../../assets/img/ca6.jpg'}, 
    {'image': '../../../assets/img/ca7.jpg'}, 
    
  ];

}
