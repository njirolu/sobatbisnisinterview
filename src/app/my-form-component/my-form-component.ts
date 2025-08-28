import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form-component',
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
],
  templateUrl: './my-form-component.html',
  styleUrl: './my-form-component.css'
})
export class MyFormComponent implements OnInit {

  formName!: FormGroup

  names: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formName = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit(): void {

    if(this.formName?.valid) {
      const newName = this.formName.get('name')?.value;
      if(newName) {
        this.names.push(newName);
        this.resetForm();
      }
    }

  }


  resetForm(): void {
    this.formName?.reset()
  }

  hasNameRequiredError(): boolean | undefined {
    const nameControl = this.formName?.get('name');
    return nameControl?.hasError('required') && (nameControl?.touched || nameControl?.dirty);
  }

}
