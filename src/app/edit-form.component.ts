import { Component, Input, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Apt } from './apt';
import { AptService } from './apt.service';

import 'rxjs/add/operator/switchMap'; //use with route params Observable
import 'rxjs/add/operator/delay';


@Component({
	selector: 'edit-form',
	templateUrl: './edit-form.component.html',
	providers: [AptService]
})
export class EditFormComponent implements OnInit{
	// editFrom = new FormGroup({
	// 	name: new FormControl()
	// })
	editForm: FormGroup;

	private apt: Apt;
	private parentRouteId: number;
	private sub: any;

	constructor(
		//injected
	 	private aptService: AptService,
	 	private route: ActivatedRoute,
	 	private location: Location,
	 	private router: Router,
	 	private formBuilder: FormBuilder
	){
		this.createForm();
		//this.fillForm();

		// this.router.parent(this.route).params.map(param => this.parentRouteId = param.id);
	}

	ngOnInit(): void {

	 	this.sub = this.route.parent.params.subscribe(params => {
	 		this.parentRouteId = +params["id"];
	 	});
	 	//console.log(this.parentRouteId);
	 	this.aptService.getAptTimeout(this.parentRouteId)
	 	                   // .then(promise => console.log(promise));
	 	                   .then(promise => {
	 	                   	                   // console.log(3);
	 	                   	                   // console.log(promise);
	 	                   	                   this.apt = promise;
	 	                   	                   // console.log(this.apt);
	 	                   	                   this.fillForm();
	 	                   	                 });
	 	// console.log(this.apt);

    }

    ngOnDestroy(): void {
    	this.sub.unsubscribe();
    }

    ngOnChanges(): void {
    	this.editForm.reset({
	    	id: this.apt.id,
	    	name: this.apt.name,
	    	numarCamere: this.apt.numarCamere,
	    	numarBai: this.apt.numarBai,
	    	adresa: this.apt.adresa,
	    	suprafata: this.apt.suprafata,
	    	pret: this.apt.pret
	    });
	    console.log("ngOnChanges");
	    console.log(this.apt);
    }

    goBack(): void {
    	this.location.back();
    }

    createForm() {
    	//call factory method
    	this.editForm = this.formBuilder.group({
    		id: '', //generate next id automatically
    		name: '',
    		numarCamere: '',
    		numarBai: '',
    		adresa: '',
    		suprafata: '',
    		pret: ''
        });
    }

    fillForm() {
	    	this.editForm.setValue({
		    	id: this.apt.id,
		    	name: this.apt.name,
		    	numarCamere: this.apt.numarCamere,
		    	numarBai: this.apt.numarBai,
		    	adresa: this.apt.adresa,
		    	suprafata: this.apt.suprafata,
		    	pret: this.apt.pret
	    });
    }

    revert() {
    	this.ngOnChanges();
    }

    prepareSaveApt(): Apt{
    	const formModel = this.editForm.value;

    	const saveApt: Apt = {
    		id: this.editForm.value.id,
    		name: this.editForm.value.name as string,
    		numarCamere: this.editForm.value.numarCamere as number,
    		numarBai: this.editForm.value.numarBai as number,
    		adresa: this.editForm.value.adresa as string,
    		suprafata: this.editForm.value.suprafata as number,
    		pret: this.editForm.value.pret as number
    	}
    	console.log("before return saveApt");
    	return saveApt;
    }

    onSubmit(){
    	this.apt = this.prepareSaveApt();
    	console.log(this.apt);
    	this.aptService.updateApt(this.apt);
    	this.ngOnChanges();
    	console.log("onSubmit");
    	this.aptService.getAptTimeout(this.parentRouteId)
	 	                   .then(promise => {  this.apt = promise;
	 	                   	                   this.fillForm();});
    }
}