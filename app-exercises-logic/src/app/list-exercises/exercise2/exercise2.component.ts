import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {
	textValue1='';
	textValue2='';
	textValue3='';
	verificarMedia(nota1, nota2, nota3: string): void{
		alert('Notas: '+ nota1 + nota2 + nota3);
		this.textValue1='';
		this.textValue2='';
		this.textValue3='';
	}
  constructor() { }

  ngOnInit() {
  }

}
