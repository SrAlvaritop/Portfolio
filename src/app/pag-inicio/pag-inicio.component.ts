import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-pag-inicio',
  templateUrl: './pag-inicio.component.html',
  styleUrls: ['./pag-inicio.component.css']
})
export class PagInicioComponent implements OnInit {
  title = 'PortfolioWeb';

  fontColor = "#d1b4ff";
  users = ["Álvaro", "Diego", "José", "Raúl"];

  barTitleContent = 'Álvaro José Camino González';
  constructor(private deviceService: DeviceDetectorService) { }

  message = "I'm read only!";
  canEdit = false;
 
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }

  ngOnInit(): void{

    console.warn("WARNING: ¿Qué haces abriendo el inspeccionar?");
    const target = document.querySelector('.tw');

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
      .type('¡Bienvenido a mi Portfolio! Mi nombre es <br>Álvaro y me considero una persona <br>responsable, trabajadora, organizada y con <br>capacidad de trabajar tanto individualmente <br>como en equipo. Mis objetivos son <br>superarme, aprender día a día y avanzar en <br>el sector de las nuevas tecnologías y la <br>informática.<br> <br>> Los lenguajes que utilizo principalmente<br> en mis desarrollos son: <br> ~ PHP <br> ~ HTML <br> ~ CSS  <br> ~ JavaScript <br> ~ C <br> ~ C++ <br> ~ C# <br> ~ Python <br> ~ Django <br> ~ Java <br> ~ Android Studio <br> ~ SQL <br> ~ Unity <br> ~ Angular')
      .rest(500)
      .start()
    }
    else{
      writer
      .type('¡Bienvenido a mi Portfolio! Me llamo Álvaro y me considero una persona responsable, trabajadora, <br>organizada y con capacidad de trabajar tanto individualmente como en equipo. Mis objetivos son <br>superarme, aprender día a día y avanzar en el sector de las nuevas tecnologías, la informática y <br>el desarrollo web.<br> <br>> Los lenguajes que utilizo principalmente en mis desarrollos son: <br> ~ PHP <br> ~ HTML <br> ~ CSS  <br> ~ JavaScript <br> ~ C <br> ~ C++ <br> ~ C# <br> ~ Python <br> ~ Django <br> ~ Java <br> ~ Android Studio <br> ~ SQL <br> ~ Unity <br> ~ Angular')
      .rest(500)
      .start()
    }
  }
  

}
