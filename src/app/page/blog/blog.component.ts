import {Component, OnInit} from '@angular/core';
import {ArticlesService} from '../../services/articles/articles.service';
import {Article} from '../../classes/Article';

@Component({
  selector: 'app-blog',
  standalone: false,

  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  articles: Article[] =[];
  name: string = 'liste d\'article'

  constructor(public articleService: ArticlesService){}

  ngOnInit(): void {
    this.articles = this.articleService.getData()
  }
}
