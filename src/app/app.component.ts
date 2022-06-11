import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService) {
  }


  ngOnInit(): void{

  }
  
  
}

