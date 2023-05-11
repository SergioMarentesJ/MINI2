import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  constructor(){
    
  }

  items = [
    {
      image: "https://via.placeholder.com/300",
      title: "Misión",
      description:
        "La misión de un cine puede ser proporcionar a sus clientes una experiencia única de entretenimiento mediante la proyección de películas y eventos especiales en una atmósfera cómoda y acogedora.",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Visión",
      description:
        "La visión de un cine puede ser convertirse en el cine preferido de la comunidad, ofreciendo una amplia variedad de películas y eventos especiales, y manteniendo un alto nivel de calidad en todas las áreas de operación.",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Valores",
      description:
        "Los valores de un cine pueden incluir la satisfacción del cliente, la excelencia en el servicio, la innovación, la responsabilidad social y el compromiso con la comunidad.",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Objetivos",
      description:
        "Algunos objetivos que un cine podría tener incluyen aumentar la asistencia a las películas, ofrecer una experiencia de cine de alta calidad, aumentar la satisfacción del cliente y expandir su presencia en la comunidad.",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Estrategias",
      description:
        "Para lograr estos objetivos, un cine podría implementar estrategias como la promoción de eventos especiales, la oferta de servicios premium, la mejora continua de la calidad del servicio y la colaboración con organizaciones comunitarias para apoyar causas sociales importantes.",
    },
  ];

  ngOnInit(): void {
    
  }

}
