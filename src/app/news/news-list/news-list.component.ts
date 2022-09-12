import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit, OnDestroy {
  news: News[];
  subscription: Subscription;

  constructor(private newsService: NewsService, private router: Router, private route: ActivatedRoute, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.subscription = this.newsService.newsChanged.subscribe(
      (news: News[]) => {
        this.news = news;
      }
    );
    this.news = this.newsService.getNews();
  }

  onAddNews() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onSaveNews() {
    this.dataStorageService.storeNews();
  }

  onFetchNews() {
    this.dataStorageService.fetchNews().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
