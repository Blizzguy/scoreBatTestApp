import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Match } from '../core/interfaces/match';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private videoApiToken = 'Mjc0NzFfMTY2MzUyNjA5Nl9mYzNhMGQxMDJkNmY0OGVjMjNjYTFmMjcxZmQyNzgxYTUwNGE0NmY5';

  constructor(private http: HttpClient) { }

  getRecentFeed(): Observable<any> {
    return this.http.get('https://www.scorebat.com/video-api/v3/feed/?token='+this.videoApiToken);
  }

  getCompetition(competition: string): Observable<Match[]> {
    return this.http.get<Match[]>('https://www.scorebat.com/video-api/v3/competition/'+competition+'?token='+this.videoApiToken);
  }

  getTeam(team: string): Observable<Match[]> {
    return this.http.get<Match[]>('https://www.scorebat.com/video-api/v3/team/'+team+'/?token='+this.videoApiToken);
  }
}
