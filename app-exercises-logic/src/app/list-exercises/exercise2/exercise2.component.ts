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
	media = 0.0;
	n1 = 0.0;
	n2 = 0.0;
	n3 = 0.0;

	verificarMedia(nota1, nota2, nota3: string): void{
		this.n1 = parseFloat(nota1);
		this.n2 = parseFloat(nota2);
		this.n3 = parseFloat(nota3);
		this.media = (this.n1 + this.n2 + this.n3) / 3;	
		if(this.media < 7){
			alert('Média: ' + this.media + '\nAluno reprovado!');
		}
		else if(this.media >= 7){
			if (this.media >= 10) {
				alert('Média: ' + this.media + '\nAluno aprovado com LOUVOR!');
			}
			else
				alert('Média: ' + this.media + '\nAluno aprovado!');
		}
		
		//Limpando textBox html do componente
		this.textValue1='';
		this.textValue2='';
		this.textValue3='';
	}
  constructor() { }

  ngOnInit() {
  }

}
