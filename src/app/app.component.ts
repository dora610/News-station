import { Component } from '@angular/core';

interface NewsCard{
  headline: string,
  img?: string,
  publishedOn: Date;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-station';
  headlineStories!: NewsCard[];

  ngOnInit(){
    this.headlineStories = [
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
    ]
  }
}
