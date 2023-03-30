import { Injectable } from '@angular/core';
import { NewsCard } from '../models/NewsCard';

@Injectable({
  providedIn: 'root'
})
export class HeadlineStroyServiceService {

  headlineStories!: NewsCard[];

  constructor() { 
    let mockStory: NewsCard = {
      headline: 'News Heading 1',
      subHeading: 'Subtitle',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      url: '/',
      publishedOn: new Date()
    }

    this.headlineStories = [];

    for (let i = 0; i < 9; i++) {
      mockStory.headline = `News Heading ${i+1}`;
      mockStory['isMainStory'] = i===1 ? true : false;
      this.headlineStories.push({...mockStory});
    }
    
  }

  getHeadlineStories(): NewsCard[]{
    console.log(this.headlineStories);
    
    return this.headlineStories;
  }

  // TODO: create a fetch method for news fetching from api
}
