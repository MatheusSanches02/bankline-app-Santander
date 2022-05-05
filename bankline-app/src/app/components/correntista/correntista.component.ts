import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';

@Component({
  selector: 'app-correntista',
  templateUrl: './correntista.component.html',
  styleUrls: ['./correntista.component.css']
})
export class CorrentistaComponent implements OnInit {

  nome:any;
  cpf:any;
  correntistas: any;
  correntista:any;

  constructor(private correntistaService: CorrentistaService) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
  }

  exibirCorrentistas() : void{
    this.correntistaService.list()
    .subscribe(
      data => {
        this.correntistas = data;
        console.log(data);
      },
      error => {
        console.log(error)
      }
    );
  }
  save(): void {
    console.log(this.correntista)
    const correntista = {
      nome:this.nome,
      cpf:this.cpf
    };
    console.log(correntista);
    this.correntistaService.create(correntista)
    .subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(error)
      }
    );
  }
}
