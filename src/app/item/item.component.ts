import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BackandService } from 'angular2bknd-sdk';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  item: any;
  @Input()itens: any;
  constructor(private router: Router, private backandService: BackandService) {
    //
    this.backandService.setAppName('diegooliveira');
    this.backandService.setSignUpToken('ffee414d-f069-4fe6-b483-096e8e3fa86f');
    //this.backandService.setAnonymousToken('fbfdd4b6-db51-4e12-9477-338efb03c89f');
    //entra em modo anômimo
    //this.backandService.useAnonymousAuth();
    this.item = {};
    this.itens = [];

    this.listar();
  }

  salvar() {
    console.log(this.item);
    //{nome: "adasda", email: "sadadas", cpf: 4414141}
    if (this.item.id == undefined) {
      if(this.item.codigo!=0 && this.item.nome !=''){
        this.backandService.create('item', this.item)
        .subscribe(
        data => {
          this.item = {};
          this.listar();
        },
        err => {
          console.log(err);
        }

        );
      }else{alert("O código deve ser diferente de zero e o nome não pode estar em branco!")}  
      
    } else {
      // passa somente os campos que são alteraveis, ou seja, codigo, nome e descricao
      this.backandService.update('item', this.item.id, {
        codigo:this.item.codigo,
        nome: this.item.nome,
        descricao: this.item.descricao
      })
        .subscribe(
        data => {
          this.item = {};
          this.listar();
        },
        err => {
          console.log(err);
        }

        );
    }
    this.itens.push(this.item);
    this.item = {};
    this.listar();
  }

  editar(c) {
    //console.log(c)
    this.item = c
  }

  excluir(c) {
    //console.log(c)
    let confirmar = confirm("Tem certeza que deseja excluir?");
    if(confirmar){
      this.backandService.delete('item', c.id)
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
    this.item = {};
    this.listar();
  }



  listar() {
    this.backandService.getList('item')
      .subscribe(
      data => {
        this.itens = data;
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


