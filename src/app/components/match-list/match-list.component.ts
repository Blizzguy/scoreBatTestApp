import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Match } from 'src/app/core/interfaces/match';
import { Matches } from 'src/app/core/interfaces/matches';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  groupMatches: Match[];
  

  constructor(public appService: AppService, public sanitizer:DomSanitizer) {
   }

  ngOnInit(): void {
    this.getRecentFeed();
  }

  getRecentFeed(): void {
    this.appService.getRecentFeed().subscribe(
      (result: Matches) => {
        this.groupMatches = result.response;
      }
    );
  }

}
