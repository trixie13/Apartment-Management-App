import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';


import { Apt } from './apt'
import { APTS } from './mock-apts';

@Injectable()
export class AptService {
	//service could get data from anywhre
	//web service/ local storage / mock data source
	getApts(): Promise<Apt[]> {
		return Promise.resolve(APTS);
	}

	getApt(id: number): Promise<Apt> {
		return this.getApts().then(apts => apts.find(apt => apt.id === id));
	}

	getAptTimeout(id: number): Promise<Apt> {
        return new Promise(resolve =>
        	setTimeout(() => resolve(this.getApt(id)), 2000)
        );
   	}

   	updateApt(apt: Apt): Observable<Apt> {
   		const oldApt = this.getApt(apt.id);

   		const newApt = Object.assign(oldApt,apt);

   		return of(newApt).delay(500);
   	}
}