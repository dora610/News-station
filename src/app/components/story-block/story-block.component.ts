import { Component, Input } from '@angular/core';
import { NewsPreview } from 'src/app/models/NewsPreview';

@Component({
  selector: 'app-story-block',
  templateUrl: './story-block.component.html',
  styleUrls: ['./story-block.component.scss']
})
export class StoryBlockComponent {
  @Input()
  story!: NewsPreview;

  ngOninit(){ }

}
