import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  news: News;
  id: number;

  constructor(private newsService: NewsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.news = this.newsService.getNewsElement(this.id);
      }
    );
  }

  onEditNews() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteNewsElement() {
    this.newsService.deleteNewsElement(this.id);
    this.router.navigate(['/news']);
  }

}
