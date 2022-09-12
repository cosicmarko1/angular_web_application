import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { News } from "./news.model";
import { NewsService } from "./news.service";

@Injectable({ providedIn: 'root' })

export class NewsResolverService implements Resolve<News[]> {

    constructor(private dataStorageService: DataStorageService, private newsService: NewsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const news = this.newsService.getNews();
        if (news.length === 0) {
            return this.dataStorageService.fetchNews();
        } else {
            return news;
        }
    }
}