import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackandService } from 'angular2bknd-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './pedido.component.html',// <input [textMask]="{mask: mask}" [(ngModel)]="myModel" type="text"/>
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
    pedido: any;
    pedidos: any;
    constructor(private router: Router, private backandService: BackandService) {
    //
    this.backandService.setAppName('financaspaidegua');
    this.backandService.setSignUpToken('4647a51a-b46c-47f4-94cc-532fd489ce75');

    this.pedido = {};
    this.pedidos = [];

    this.listar();
  }

salvar() {
    //console.log(this.pedido);
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

  limpar(){
    this.pedido = {};
    this.listar();
  }

 public navigate(url) {
		this.router.navigate([url]);
	}
}