import { Component } from '@angular/core';
import { NewsPreview } from 'src/app/models/NewsPreview';
import { HeadlineStroyServiceService } from 'src/app/services/headline-stroy-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  headlineStories!: NewsPreview[];
  colLeftStories!: NewsPreview[];
  colCenterStories!: NewsPreview[];
  colRightStories!: NewsPreview[];

  constructor(private hlStroyServiceService: HeadlineStroyServiceService ){}

  ngOnInit(){
    this.headlineStories = [
      {
        "id": 3,
        "headline": "A Texas judge just issued a national ruling against medication abortion. What now?",
        "subHeading": "The status of mifepristone in America, explained.",
        "img": "1241524355.webp",
        "publishedOn": new Date("2023-04-02T05:30:00"),
        "isMainStory": false,
        "author": "Rachel M. Cohen",
        "category": "Law"
      },
      {
        "id": 4,
        "headline": "\"Soros-backed\": The GOP's favorite attack on the man prosecuting Trump, explained",
        "subHeading": "How billionaire George Soros was dragged into the Trump indictment debate — and why many are saying it's antisemitic to have done so.",
        "img": "1195517876.webp",
        "publishedOn": new Date("2023-04-02T05:30:00"),
        "isMainStory": false,
        "author": "Zack Beauchamp",
        "category": "Trending"
      },
      {
        "id": 5,
        "headline": "Meet the MAGA movement’s new favorite autocrat",
        "subHeading": "The American right is falling in love with El Salvador’s president, Nayib Bukele, over his crime crackdown. But he’s also tearing down Salvadoran democracy.",
        "img": "1316520967.webp",
        "publishedOn": new Date("2023-04-02T05:30:00"),
        "isMainStory": false,
        "author": "Zack Beauchamp",
        "category": "Political"
      },
      {
        "id": 6,
        "headline": "A renter’s guide to the Inflation Reduction Act",
        "subHeading": "Time to approach your landlord or consider a window unit heat pump.",
        "img": "88900792.webp",
        "publishedOn": new Date("2023-04-02T12:00:00"),
        "isMainStory": false,
        "author": "Rebecca Leber",
        "category": "Economy"
      },
      {
        "id": 7,
        "headline": "The allure of the entrepreneur movie, from Air to Tetris to BlackBerry",
        "subHeading": "Scammers are over. It’s time to make some deals.",
        "img": "236727102311.webp",
        "publishedOn": new Date("2023-04-02T12:45:00"),
        "isMainStory": false,
        "author": "Alissa Wilkinson",
        "category": "Movie"
      },
      {
        "id": 8,
        "headline": "A study confirms it: Tennessee’s democracy really is as bad as the expulsions made you think",
        "subHeading": "Research assessed democracy in every state. Tennessee came in last place.",
        "img": "12508330177.webp",
        "publishedOn": new Date("2023-04-02T15:30:00"),
        "isMainStory": false,
        "author": "Zack Beauchamp",
        "category": "Politics"
      },
      {
        "id": 9,
        "headline": "Taiwan’s president is in the Americas — and China’s not happy",
        "subHeading": "President Tsai Ing-wen is shoring up allies, but a meeting with Speaker Kevin McCarthy is drawing threats from Beijing.",
        "img": "1478607994.webp",
        "publishedOn": new Date("2023-04-02T05:30:00"),
        "isMainStory": false,
        "author": "Ellen Ioanes",
        "category": "Geo-political"
      },
      {
        "id": 1,
        "headline": "The ridiculous but important Twitter check mark fiasco keeps getting worse",
        "subHeading": "Twitter is finally taking away those free blue \"legacy\" checks to give its paid Twitter Blue service a boost.",
        "img": "1244400907.webp",
        "publishedOn": new Date("2023-04-02T05:30:00"),
        "isMainStory": true,
        "author": "Sara Morrison",
        "category": "Social"
      },
      {
        "id": 2,
        "headline": "The taunt that eclipsed the NCAA women's basketball championship, explained",
        "subHeading": "Angel Reese, Caitlin Clark, and the respectability politics of women’s basketball.",
        "img": "1479190822.webp",
        "publishedOn": new Date("2023-04-02T05:30:00"),
        "isMainStory": false,
        "author": "Alex Abad-Santos",
        "category": "Sprots"
      }
    ]

    this.headlineStories.sort((a,b)=> a.id - b.id);

    // this.hlStroyServiceService.fetchHeadlineStories()
    //   .subscribe((res)=> this.headlineStories = res);

    this.segregateStories()
  }

  segregateStories(){
    this.colCenterStories = this.headlineStories.slice(0, 2);
    this.colLeftStories = this.headlineStories.slice(2, 5);
    this.colRightStories = this.headlineStories.slice(5, 8);
  }

}
