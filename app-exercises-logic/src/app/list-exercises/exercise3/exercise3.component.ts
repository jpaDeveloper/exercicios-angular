import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component implements OnInit {
	textValue = '';
	strIdade = '';
	intIdade = 0;
	list: number [] = [0];
	i = 0; //controle
  verificarIdades(idade: string): void{
  	this.intIdade = parseInt(idade);
  	if (this.intIdade > 0) {
  		this.list[this.i] = this.intIdade;
  		this.i++;
  		alert('Lista: '+ this.list);
  	}
  	else if (this.intIdade < 0)
  		alert('Por favor digite uma idade válida!');
  	
  	// this.intIdade = parseInt(idade);
  	// if (this.intIdade > 0) {
  	// 	this.list[this.i] = this.intIdade;
  	// 	this.strIdade = this.strIdade + ' ' +idade; //concatenando as strings e dividindos por espaco
  	// 	alert('Idades concatenadas '+this.strIdade);
  	// }
  	// else if (this.intIdade < 0)
  	// 	alert('Por favor digite uma idade válida!');
  	// else if ((this.intIdade == 0 ) && (this.strIdade == ''))
  	// 	alert('Sem idade suficiente para calcular uma média. \nPor favor digite ao menos duas idades!');
  	
  	this.textValue = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
