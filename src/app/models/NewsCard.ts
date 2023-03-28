export interface NewsCard {
  headline: string;
  subHeading: string;
  desc: string;
  img?: string;
  publishedOn: Date;
  url: string;
  isMainStory?: boolean;
}
