import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogComponent} from './page/blog/blog.component';
import {HomeComponent} from './page/home/home.component';
import {AboutComponent} from './page/about/about.component';
import {ArticleDetailComponent} from './page/article-detail/article-detail.component';
import {LoginComponent} from './page/login/login.component';
import {MyAccountComponent} from './page/my-account/my-account.component';
import {authGuard} from './guards/auth.guard';
import {CatFactsComponent} from './page/cat-facts/cat-facts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'cat-facts', component: CatFactsComponent },
  { path:'about', component: AboutComponent },
  { path:'blog/:id', component: ArticleDetailComponent },
  { path:'login', component: LoginComponent },
  { path:'my-account', component: MyAccountComponent,canActivate:[authGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
