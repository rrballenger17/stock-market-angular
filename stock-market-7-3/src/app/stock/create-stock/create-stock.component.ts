import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { FormControl, FormGroup, FormArray } from '@angular/forms' ; 
import { Validators, FormBuilder } from '@angular/forms' ;

let counter = 1;

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent  {

	private stock: Stock;

	public stockForm : FormGroup;

	constructor(private fb: FormBuilder) {
		this.createForm();
	} 

	createForm(){
		this.stockForm = this.fb.group( { 
			name : [ null , Validators.required ] , 
			code : [ null , [ Validators.required , Validators.minLength( 2 ) ] ] , 
			price : [ 0 , [ Validators.required , Validators.min( 0 ) ] ],
			notablePeople : this.fb.array( [] ) 
		}) ; 
	}

	get notablePeople() : FormArray { 
		return this.stockForm.get( 'notablePeople' ) as FormArray ; 
	}

	addNotablePerson() {
		this.notablePeople.push( this.fb.group( { 
			name : [ '' , Validators.required ], 
			title : [ '' , Validators.required ] 
		})) 
	} 

	removeNotablePerson( index : number ) { this.notablePeople.removeAt( index ) ; } 



	resetForm() { this.stockForm.reset() ; } 

	onSubmit() { 
		this.stock = Object.assign( {} , this.stockForm.value ) ; 

		console.log( 'Stock Form Value' , this.stock ); 
	}

}
