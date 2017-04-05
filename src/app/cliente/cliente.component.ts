import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackandService } from 'angular2bknd-sdk';

class Cliente {
  nome: String
  email: String
  cpf: String

}

@Component({
  selector: 'app-root',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente: any;
  clientes: any;
  constructor(private router: Router, private backandService: BackandService) {
    //
    this.backandService.setAppName('financaspaidegua');
    this.backandService.setSignUpToken('4647a51a-b46c-47f4-94cc-532fd489ce75');
  

    this.cliente = {};
    this.clientes = [];

    this.listar();
  }

  salvar() {
    //console.log(this.cliente);
    //{nome: "adasda", email: "sadadas", cpf: 4414141}
    if (this.cliente.id == undefined) {

      this.backandService.create('cliente', this.cliente)
        .subscribe(
        data => {
          this.cliente = {};
          this.listar();
        },
        err => {
          console.log(err);
        }

        );
    } else {
      // passa somente os campos que são alteraveis, ou seja, nome, email e cpf
      this.backandService.update('cliente', this.cliente.id, {
        nome: this.cliente.nome,
        email: this.cliente.email,
        cpf: this.cliente.cpf
      })
        .subscribe(
        data => {
          this.cliente = {};
          this.listar();
        },
        err => {
          console.log(err);
        }

        );
    }
  }

  editar(c) {
    //console.log(c)
    this.cliente = c
  }

  excluir(c) {
    //console.log(c)
    this.backandService.delete('cliente', c.id)
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
    this.cliente = {};
    this.listar();
  }



  listar() {
    this.backandService.getList('cliente')
      .subscribe(
      data => {
        this.clientes = data;
        
      },
      err => {
        console.log(err);
      }
      );
  }

  public navigate(url) {
		this.router.navigate([url]);
	}

}
