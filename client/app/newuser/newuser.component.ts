import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FileValidator } from './file-input.validator';
import { StateService } from '../services/state.service';
import { State } from '../shared/models/state.model';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {
  isLoading = true;
  states: State[] = [];
  constructor(private fb: FormBuilder,private stateService:StateService) { }
  newUserForm = this.fb.group({
    firstName: ['', Validators.required],
    middlename: [''],
    lastname: [''],
    emailid: [''],
    Password: [''],
    Address: [''],
    Address2: [''],
    inputCity: [''],
    inputState: [''],
    inputZip: [''],
    Description: [''],
    isRegistered: [''],
    subscription: [''],
    file: ['',FileValidator.validate]
   
  });
  ngOnInit() {
    this.getCats();
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newUserForm.value);
  }

  getCats() {
    this.stateService.getStates().subscribe(
      data => this.states = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}
