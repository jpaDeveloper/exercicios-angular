import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component implements OnInit {
	tamanho = 0;
	textValue = '';
	intIdade = 0;
	menor = 0; 
	maior = 0;
	media = 0.0;
	list: number [] = [0];
	i = 0; //controle da lista
  verificarIdades(idade: string): void{
  	var media = 0.0;
  	this.intIdade = parseInt(idade);
  	if (this.intIdade > 0) {
  		if(this.i == 0){ // Set inicial das variaveis maior e menor
  			this.menor = this.intIdade;
  			this.maior = this.intIdade;
  		}
  		this.list[this.i] = this.intIdade; // Coloca a idade digitada na lista 
  		if(this.list[this.i] > this.maior)
  			this.maior = this.list[this.i];
  		else if (this.list[this.i] < this.menor)
  			this.menor = this.list[this.i];
  		this.i++;
  	}
  	else if (this.intIdade < 0) // Solicita idade valida (maior que zero)
  		alert('Por favor digite uma idade válida!');
  	else if ((this.intIdade == 0) && (this.list.length >= 2)){ // Verifica se ao digitar 0 para encerrar a lista possui mais de duas idades
  		for (var i = this.list.length - 1; i >= 0; i--) {// Percorre a lista para salvar as idades e calcular a media
  			this.media = this.media + this.list[i];
  		}
  		this.tamanho = this.list.length; // Pega o tamanho da lista para calcular a media
  		media = this.media / this.tamanho;
  		alert('A menor idade é: ' + this.menor + '\nA maior idade é: '+ this.maior + '\nA média é: '+ media);
  		this.list = []; // Limpa a lista
  		this.i = 0;
  		this.menor = 0;
  		this.maior = 0;
  		this.media = 0.0;
  	}
  	else
  		alert('Por favor digite ao menos dois valores antes de encerrar.');
  	this.textValue = ''; //Limpa o input do html
  }
  constructor() { }

  ngOnInit() {
  }

}
