import { Component, OnInit } from '@angular/core';
import { Matches } from 'src/app/core/interfaces/matches';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  matches: Matches;

  constructor(public appService: AppService) {
   }

  ngOnInit(): void {
    this.getRecentFeed();
  }

  getRecentFeed(): void {
    this.appService.getRecentFeed().subscribe(
      (result: Matches) => {
        this.matches = result;
        console.log(this.matches);
      }
    );
  }

}
