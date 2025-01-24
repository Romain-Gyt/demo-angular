import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticlesService} from '../../services/articles/articles.service';
import {Article} from '../../classes/Article';

@Component({
  selector: 'app-article-detail',
  standalone: false,

  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent implements OnInit {

  article: Article = new Article("","","");
  errorMessage =""
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if(!id){
     this.errorMessage="No such article";
     return;
    }
    const article = this.articleService.findById(id)
    if(!article){
      this.errorMessage="No such article";
      return;
    }
    this.article = article;
  }
}
