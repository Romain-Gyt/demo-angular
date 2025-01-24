import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../../services/articles/articles.service';
import { Article } from '../../../../classes/Article';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  standalone: false,
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  articleForm: FormGroup;

  constructor(private fb: FormBuilder, public articleService: ArticlesService) {
    this.articleForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      createdAt: [new Date(), Validators.required],
      isPublic: [false],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  addArticle() {
    if (this.articleForm.valid) {
      const { title, description, author } = this.articleForm.value;
      let article: Article = new Article(title, description, author);
      this.articleService.addArticle(article);
      this.articleForm.reset({
        createdAt: new Date(),
      });
    } else {
      console.log('Formulaire invalide');
    }
  }

}
