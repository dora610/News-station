import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-story-block',
  templateUrl: './story-block.component.html',
  styleUrls: ['./story-block.component.scss']
})
export class StoryBlockComponent {
  @Input()
  headline!:string;
  @Input()
  subHeading!: string;
  @Input()
  desc!: string;
  @Input()
  publishedOn!: Date;
  @Input()
  storyUrl!: string;
  @Input()
  isMainStrory!: boolean|undefined;

  ngOninit(){ }

}
