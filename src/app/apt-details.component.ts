import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Apt } from './apt';

import { AptService } from './apt.service';

import 'rxjs/add/operator/switchMap'; //use with route params Observable

@Component({
	selector: 'apt-details',
	templateUrl: './apt-details.component.html',
	providers: [AptService]
})
export class AptDetailsComponent implements OnInit{
	 @Input() apt: Apt;
	 private parentRouteId: number;

	 constructor(
	 	private aptService: AptService,
	 	private route: ActivatedRoute,
	 	private router: Router,
	 	private location: Location
	 ){}

	 ngOnInit(): void {
	 	this.route.params
		 	         .switchMap((params: Params) => this.aptService.getApt(+params['id']))
		 	         .subscribe(apt => this.apt = apt);       
	 }
	 goBack(): void {
	 	this.location.back();
	 }
}
//eport class to make available to other components