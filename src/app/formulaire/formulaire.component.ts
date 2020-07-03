import { Component, OnInit } from '@angular/core';
import { Produit } from '../interfaces/produit';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  produits: Array<Produit> = [];
  produit: Produit = { };
  constructor() { }
  

  ngOnInit(): void {
  }
  ajouterProduit() {
    this.produits.push({ ...this.produit });
    this.produit.nom = '';
    this.produit.libelle ='';
    this.produit.quantite = 1;
    this.produit.dateprod = new Date(2019, 12,34,56);
    this.produit.dateperem = new Date(2019, 12,34,56);
    console.log(this.produits);
    }

}
