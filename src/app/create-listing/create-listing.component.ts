import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss'],
})
export class CreateListingComponent implements OnInit {

  createListingForm: FormGroup;
  imagePreview: string;

  constructor() { }

  ngOnInit() {
    this.createListingForm = new FormGroup({
      'name': new FormControl(null,{validators:[Validators.required]}),
      'phone': new FormControl(null, {validators: [Validators.required]}),
      'email': new FormControl(null, {validators: [Validators.required, Validators.email]}),
      'details': new FormControl(null),
    })
  }

}
