import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() news: News;
  @Input() index: number;

  ngOnInit(): void {
  }
}
