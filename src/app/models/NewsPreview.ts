export interface NewsPreview {
  id: number;
  headline: string;
  subHeading: string;
  img?: string;
  publishedOn: Date;
  isMainStory?: boolean;
  author: string,
  category: string
}
