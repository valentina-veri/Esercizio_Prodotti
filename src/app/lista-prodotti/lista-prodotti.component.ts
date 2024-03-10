import { Component } from '@angular/core';
import { PRODOTTI } from '../data/prodotti';
import { Prodotto } from '../models/models';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrl: './lista-prodotti.component.css'
})
export class ListaProdottiComponent {
  prodotti:Prodotto[] = PRODOTTI;
}
