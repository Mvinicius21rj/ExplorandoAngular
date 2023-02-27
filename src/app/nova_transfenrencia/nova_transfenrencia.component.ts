import { Router } from '@angular/router';
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from '../services/Transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-nova-tranferencia',
    templateUrl: './nova_transfenrencia.component.html',
    styleUrls:['./nova_transfenrencia.component.scss']
})

export class NovaTranferenciaComponent{

@Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service:TransferenciaService, private router: Router){}

  tranferir(){
    alert("Clicado")
    const valorEmitir: Transferencia = {
      valor: this.valor, destino: this.destino
    };

    this.service.adicionar(valorEmitir)
    .subscribe(resultado => {
      console.log(resultado)
      // this.limparCampos();
      this.router.navigateByUrl('extrato')
    },
    (error) => console.error(error))

    this.limparCampos();

  };



  limparCampos(){
  this.valor = 0;
  this.destino = 0;
}

}
