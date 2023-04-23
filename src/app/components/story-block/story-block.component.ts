import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NewsPreview } from 'src/app/models/NewsPreview';

@Component({
  selector: 'app-story-block',
  templateUrl: './story-block.component.html',
  styleUrls: ['./story-block.component.scss']
})
export class StoryBlockComponent implements OnInit{
  
  @Input()
  story!: NewsPreview;

  isCardInline:boolean = false;

  ngOnInit(): void {
    // this.isCardInline = this.story?.id===2 || (window.innerWidth <= 640 && this.story.id!==1)
    this.isCardInline = this.story?.id===2;
  }

}
