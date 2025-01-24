export class Article {
  static count = 0
  id: number = 0;
  title: string ='';
  description: string ='';
  createdAt?: Date = new Date();
  isPublic?: boolean = false;
  author: string ='';

  constructor( title:string, description:string, author: string) {
    if(!title || !description || !author) return;
    Article.count++;
    this.id = Article.count
    this.title = title;
    this.description = description;
    this.author = author;
    this.isPublic = true;
    this.createdAt = new Date();
  }
}
