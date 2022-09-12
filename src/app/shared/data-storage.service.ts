import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { NewsService } from "../news/news.service";
import { News } from "../news/news.model";
import { map, tap } from "rxjs/operators";
import { PartnersService } from "../partners/partners.service";
import { Partners } from "../partners/partner.model";
import { ProjectsService } from "../projects/projects.service";
import { Projects } from "./project.model";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: 'root' })

export class DataStorageService {

    constructor(private http: HttpClient,
        private newsService: NewsService,
        private partnersService: PartnersService,
        private projectsService: ProjectsService,
        private authService: AuthService) { }

    /* NewsComponent */
    storeNews() {
        const news = this.newsService.getNews();
        this.http
            .put('https://notus-news-default-rtdb.firebaseio.com/news.json', news)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchNews() {
        return this.http
            .get<News[]>('https://notus-news-default-rtdb.firebaseio.com/news.json')
            .pipe(
                map(news => {
                    return news.map(news => {
                        return {
                            ...news
                        };
                    });
                }),
                tap(news => {
                    this.newsService.setNews(news);
                })
            );
    }


    /* PartnersComponent */
    storePartners() {
        const partners = this.partnersService.getPartners();
        this.http
            .put('https://notus-partners-default-rtdb.firebaseio.com/partners.json', partners)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchPartners() {
        return this.http
            .get<Partners[]>('https://notus-partners-default-rtdb.firebaseio.com/partners.json')
            .pipe(
                map(partners => {
                    return partners.map(partner => {
                        return { ...partner };
                    });
                }),
                tap(partners => {
                    this.partnersService.setPartners(partners);
                })
            )
    }


    /* ProjectsComponent */
    storeProjects() {
        const projects = this.projectsService.getProjects();
        this.http
            .put('https://notus-projects-default-rtdb.firebaseio.com/projects.json', projects)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchProjects() {
        return this.http
            .get<Projects[]>('https://notus-projects-default-rtdb.firebaseio.com/projects.json')
            .pipe(
                map(projects => {
                    return projects.map(projects => {
                        return { ...projects };
                    });
                }),
                tap(projects => {
                    this.projectsService.setProjects(projects);
                })
            )
    }
}