import {Component, Input} from '@angular/core';
import {Article} from '../../../../classes/Article';

@Component({
  selector: 'app-single-post',
  standalone: false,

  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {
  @Input() article: Article = new Article("","","");
}
