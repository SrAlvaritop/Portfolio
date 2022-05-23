import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PortfolioWeb';

  constructor(private deviceService: DeviceDetectorService) {
  }

  ngOnInit(): void{
    const target = document.querySelector('.tw')

    const options = {
      loop: true
    }

    const writer = new Typewriter(target, {
      loop: false,
      typeSpeed: 10,
      deleteSpeed: 80,
      typeColor: 'lima'
    })

    if (this.deviceService.isMobile()) { // 768px portrait
      writer
      .type('¡Bienvenido a mi Portfolio! Mi nombre es Álvaro y me <br>considero una persona responsable, trabajadora, <br>organizada y con capacidad de trabajar tanto <br>individualmente como en equipo. Mis objetivos son <br>superarme, aprender día a día y avanzar en el sector <br>de las nuevas tecnologías y la informática.')
      .rest(500)
      .start()
    }
    else{
      writer
      .type('¡Bienvenido a mi Portfolio! Me llamo Álvaro y me considero una persona responsable, trabajadora, <br>organizada y con capacidad de trabajar tanto individualmente como en equipo. Mis objetivos son <br>superarme, aprender día a día y avanzar en el sector de las nuevas tecnologías y la informática.')
      .rest(500)
      .start()
    }
  }
  
  
}

