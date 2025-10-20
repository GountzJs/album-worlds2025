export interface PageContent {
  front: React.ReactNode;
  back: React.ReactNode;
}

export interface BookPage {
  id: number;
  content: PageContent;
}
