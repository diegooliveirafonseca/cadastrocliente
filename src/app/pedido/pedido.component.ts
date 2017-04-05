import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackandService } from 'angular2bknd-sdk';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',// <input [textMask]="{mask: mask}" [(ngModel)]="myModel" type="text"/>
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
    pedido: any;
    pedidos: any;
    itens: any;
    //cliente:any;
    constructor( private router: Router, private backandService: BackandService) {
    //
    this.backandService.setAppName('diegooliveira');
    this.backandService.setSignUpToken('ffee414d-f069-4fe6-b483-096e8e3fa86f');

    this.pedido = {};
    this.pedidos = [];
    //this.itens = [];
    this.listar();
  }

salvar() {
    console.log(this.pedido);
    //{nome: "adasda", email: "sadadas", cpf: 4414141}
    if (this.pedido.id == undefined) {

      this.backandService.create('pedido', this.pedido)
        .subscribe(
        data => {
          this.pedido = {};
          this.listar();
        },
        err => {
          console.log(err);
        }

        );
    } else {
      // passa somente os campos que são alteraveis, ou seja, nome, email e cpf
      this.backandService.update('pedido', this.pedido.id, {
        numero: this.pedido.numero,
        data: this.pedido.data,
        itens:this.pedido.itens
        
      })
        .subscribe(
        data => {
          this.pedido = {};
          this.listar();
        },
        err => {
          console.log(err);
        }

        );
    }
  }

 listar() {
    this.backandService.getList('pedido')
      .subscribe(
      data => {
        this.pedidos = data;
      },
      err => {
        console.log(err);
      }
      );
      
  }

 editar(c) {
    //console.log(c)
    this.pedido = c
  }
    
  excluir(c) {
    //console.log(c)
    let confirmar = confirm("Tem certeza que deseja excluir?");
    if(confirmar){
      this.backandService.delete('pedido', c.id)
      .subscribe(
      data => {
      },
      err => {
        console.log(err);
      },
      () => {
        alert("Excluido com sucesso!!")
        this.listar();
      }

      );
    }
  }

  limpar(){
    this.pedido = {};
    this.listar();
  }

  adicionarItem(){

  }

  removerItem(){

  }

 public navigate(url) {
		this.router.navigate([url]);
	}
}