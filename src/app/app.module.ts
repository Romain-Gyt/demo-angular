import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import {ArticlesService} from './services/articles/articles.service';
import { BlogComponent } from './page/blog/blog.component';
import {SinglePostComponent} from './page/blog/components/single-post/single-post.component';
import { ArticleFormComponent } from './page/blog/components/article-form/article-form.component';
import { ArticleDetailComponent } from './page/article-detail/article-detail.component';
import {LoginComponent} from './page/login/login.component';
import { MyAccountComponent } from './page/my-account/my-account.component';
import { CatFactsComponent } from './page/cat-facts/cat-facts.component';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    BlogComponent,
    SinglePostComponent,
    SinglePostComponent,
    ArticleFormComponent,
    ArticleDetailComponent,
    LoginComponent,
    MyAccountComponent,
    CatFactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ArticlesService,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
