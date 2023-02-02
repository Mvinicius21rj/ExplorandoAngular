import { Component } from '@angular/core';

@Component({
    selector:'app-nova-tranferencia',
    templateUrl: './nova_transfenrencia.component.html',
    styleUrls:['./nova_transfenrencia.component.scss']
})

export class NovaTranferenciaComponent{

  valor: number;
  destino: number;

  tranferir(){
    alert("Clicado")
    console.log('valor:', this.valor);
    console.log('Destino:', this.destino);
  }

}
