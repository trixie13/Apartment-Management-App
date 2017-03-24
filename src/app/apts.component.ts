import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AptDetailsComponent } from './apt-details.component';

import { AptService } from './apt.service';
import { Apt } from './apt';

@Component({
  selector: 'my-apts',
  templateUrl: './apts.component.html',
  // styleUrls: ['./app.component.css'],
  providers: [AptService]
})
export class AptsComponent implements OnInit {
  title = 'Apartament Management App';
  apts: Apt[];
  focusApt: Apt;

  // onSelect(clickedApt: Apt){
  //   this.focusApt = clickedApt;
  // }

  constructor(private aptService: AptService){}

  getApts(): void {
    // this.apts = this.aptService.getApts();
    this.aptService.getApts().then(apts => this.apts = apts);
  }
  ngOnInit(){
    this.getApts();
  }
}
