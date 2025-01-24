import { Injectable } from '@angular/core';
import {Article} from '../../classes/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  data:Article[] = []
  constructor() {
    this.data = [
        new Article(
          'Yoann lache ton baton',
          'Yoann ne veut pas lacher son baton',
          'Romain'
        ),
      new Article(
          'Yoann lache ton baton',
          'Yoann ne veut pas lacher son baton',
          'Romain'
        ),
      new Article(
          'Yoann lache ton baton',
          'Yoann ne veut pas lacher son baton',
          'Romain'
        )
    ];
  }
  getData():Article[] {
    return this.data;
  }
  addArticle(article: Article) {
    this.data.push(article);
  }

  findById(id: number):Article | undefined {
    return this.data.find(item => item.id == Number(id) );
  }
}
