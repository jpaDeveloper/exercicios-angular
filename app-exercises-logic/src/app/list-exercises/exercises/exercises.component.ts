import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  textValue = '';
  numero = 0.0;

  verificarNumero(value: string): void {  
    if(value==''){
    	alert('Digite algum número!');
    }
    else{
    	this.numero = parseFloat(value);
      if(this.numero == 0){
        alert('O número é 0!');
      }
    	else if((this.numero % 2 == 0) && (this.numero > 0)){
    		alert('O número ' + this.numero + ' é par e positivo!');
    	}
      else if((this.numero % 2 == 0) && (this.numero < 0)){
        alert('O número ' + this.numero + ' é par e é negativo');
      }
      else if(this.numero < 0){
        alert('O número ' + this.numero +' não é par e é negativo!');
      }
    	else{
    		alert('O número ' + this.numero +' não é par e é positivo!');
    	}
    }
    this.textValue = '';
    //alert(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
