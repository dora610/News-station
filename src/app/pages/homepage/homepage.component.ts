import { Component } from '@angular/core';
import { NewsCard } from 'src/app/models/NewsCard';
import { HeadlineStroyServiceService } from 'src/app/services/headline-stroy-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  headlineStories!: NewsCard[];

  constructor(private hlStroyServiceService: HeadlineStroyServiceService ){
    this.headlineStories=hlStroyServiceService.getHeadlineStories();
  }

  ngOnInit(){
    /* this.headlineStories = [
      {
        headline: 'News Heading 1',
        publishedOn: new Date()
      },
      {
        headline: 'News Heading 2',
        publishedOn: new Date()
      },
      {
        headline: 'News Heading 3',
        publishedOn: new Date()
      },
      {
        headline: 'News Heading 4',
        publishedOn: new Date()
      },
      {
        headline: 'News Heading 5',
        publishedOn: new Date()
      },
      {
        headline: 'News Heading 6',
        publishedOn: new Date()
      },
      {
        headline: 'News Heading 7',
        publishedOn: new Date()
      },
      {
        headline: 'News Heading 8',
        publishedOn: new Date()
      },
      {
        headline: 'News Heading 9',
        publishedOn: new Date()
      }
    ] */
  }

}
