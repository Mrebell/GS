import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  produitForm = new FormGroup(
    {
      nom: new FormControl(''),
      libelle: new FormControl(''),
      quantite: new FormControl(),
      dateprod: new FormControl(),
      dateperem: new FormControl(''),

    }
  );
  
  constructor() { }

  ngOnInit(): void {}
  afficherTout() {
    console.log(this.produitForm.value);
    }
    

}
