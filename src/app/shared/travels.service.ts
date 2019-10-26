import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  constructor(private firebase: AngularFireDatabase) { }
  travelsList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });
  getTravels() {
    this.travelsList = this.firebase.list('travels');
    return this.travelsList.snapshotChanges();
  }

  insertTravels(travels) {
    this.travelsList.push({
      country: travels.country,
      city: travels.city,
      description: travels.description,
      price: travels.price
    });
  }

  populateForm(travels) {
    this.form.setValue(travels);
  }

  updateTravels(travels) {
    this.travelsList.update(travels.$key, {
      country: travels.country,
      city: travels.city,
      description: travels.description,
      price: travels.price
    });
  }

  deleteTravels($key: string) {
    this.travelsList.remove($key);
  }
}