import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cat-facts',
  standalone: false,

  templateUrl: './cat-facts.component.html',
  styleUrl: './cat-facts.component.css'
})
export class CatFactsComponent implements OnInit {
  facts:any[] = [];
  isLoading = false;
  isFromPage: number = 1;
  totalPages: number = 0;

  constructor(private http: HttpClient) { }
    ngOnInit(): void {
      this.fetchPage(this.isFromPage)
    }

    fetchPage(page:number){
      this.isLoading = true;
      const URL_PAGE = `https://catfact.ninja/facts?page=${page}`;
      this.http.get(URL_PAGE).subscribe((response:any) => {
        this.isFromPage = response.current_page
        this.totalPages = response.last_page;
        this.facts = response.data;
        this.isLoading = false;
      })
    }
    changePage(page:number) {
      if (page == 0 || page == this.totalPages) return;
      this.fetchPage(page)
    }
}
