import { Component } from '@angular/core';

@Component({
  selector: 'app-dulce',
  templateUrl: './dulce.component.html',
  styleUrls: ['./dulce.component.css']
})
export class DulceComponent {


  items = [
    {
      image: "https://menuplatino.mx/wp-content/uploads/2016/12/PALOMITASGD-REFRESCOGD.png",
      title: "Combo básico",
      description:
        "Palomitas pequeñas y refresco pequeño $6.50",
    },
    {
      image: "https://menuplatino.mx/wp-content/uploads/2020/10/nachos.png",
      title: "NACHOS PLATINO",
      description:
        "Totopos de maíz con queso amarillo, bañados en chilli o salsa de frijol, con jitomate, cebolla y jalapeño en escabeche, acompañados de guacamole        ",
    },
    {
      image: "https://menuplatino.mx/wp-content/uploads/2020/10/cascara.png",
      title: "CÁSCARA DE PAPA      ",
      description:
        "Cáscaras de papa rellenas de chilli, queso cheedar y un toque de parmesano acompañadas de crema ácida        ",
    },
    {
      image: "https://menuplatino.mx/wp-content/uploads/2020/10/boneless.png",
      title: "BONELESS CHIKEN WINGS      ",
      description:
        "Bolitas de pechuga de pollo sin hueso, con bastones de zanahoria y apio, acompañados de nuestra salsa “blue hot“        ",
    },
    {
      image: "https://menuplatino.mx/wp-content/uploads/2020/10/empanadas.png",
      title: "EMPANADAS (2 PIEZAS)      ",
      description:
        "Clásicas empanadas con opción a elegir entre empanada de carne o empanada de elote con queso, acompañadas de chimichurri        ",
    },{
      image: "https://menuplatino.mx/wp-content/uploads/2023/03/losclasicos1.png",
      title: "COMBO DE LUJO",
      description:
        "Combo de lujo: Palomitas grandes, refresco grande, nachos con queso y hot dogs - $18.50",
    },{
      image: "https://menuplatino.mx/wp-content/uploads/2020/10/papas.png",
      title: "PAPAS FRITAS ESPECIALES (CON TOCINO O CHILLI)      ",
      description:
        "Papas a la francesa acompañadas de salsa de queso amarillo, mostaza, cátsup especial, con chilli o tocino curado y un toque de perejil        ",
    },{
      image: "https://menuplatino.mx/wp-content/uploads/2020/10/mac.png",
      title: "MAC & CHESSE      ",
      description:
        "Bolitas de macarrones con queso cheddar empanizadas, acompañadas de bastones de apio y zanahoria        ",
    },{
      image: "https://menuplatino.mx/wp-content/uploads/2020/09/snacks-large.png",
      title: "DEDOS DE QUESO",
      description:
        "Crujientes dedos de queso especial",
    },{
      image: "https://menuplatino.mx/wp-content/uploads/2016/12/combo-palomitasrefresco.png",
      title: "Combo grande",
      description:
        " Palomitas grandes y refresco grande ",
    }
  ];
}
