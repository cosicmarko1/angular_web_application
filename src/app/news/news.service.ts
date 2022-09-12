import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Partners } from "../partners/partner.model";
import { ProjectsService } from "../projects/projects.service";
import { Projects } from "../shared/project.model";
import { News } from "./news.model";

@Injectable()

export class NewsService {
    newsChanged = new Subject<News[]>();

    private news: News[] = [
        new News('Projekt Gundulićeva', 'Stambeno-poslovna zgrada s osam stanova i poslovnim prostorom', 'https://www.nekretnine1.pro/sites/4185/upload/listings/1645451059_enscape_2022-02-17-09-03-51.png', [
            new Partners('Monika j.d.o.o.', '', 'građevinski radovi'),
            new Partners('Obrt Ramić', '', 'instalacije vode i plina'),
            new Partners('Elektroinstalaterski obrt Lušić', '', 'elektroinstalacije'),
            new Partners('Đaković montaža', '', 'PVC stolarija'),
            new Partners('Obrt Đogaš', '', 'žbukanje, fasada'),
            new Partners('AG keramika', '', 'keramičarski radovi'),
            new Partners('Sjedić komerc', '', 'sobna vrata'),
            new Partners('Kristić izolacija', '', 'izolacija ravnog krova')
        ]),
        new News('Projekt Bakačeva', 'Stambena zgrada s devet stanova', 'http://constructo.hr/wp-content/uploads/2021/08/constructo-slavonski-brod-projektiranje-projekt-1_optimized.jpg', [
            new Partners('Monika j.d.o.o.', '', 'građevinski radovi'),
            new Partners('Obrt Ramić', '', 'instalacije vode i plina'),
            new Partners('Elektroinstalaterski obrt Lušić', '', 'elektroinstalacije'),
            new Partners('Đaković montaža', '', 'PVC stolarija'),
            new Partners('Obrt Đogaš', '', 'žbukanje, fasada'),
            new Partners('AG keramika', '', 'keramičarski radovi'),
            new Partners('Sjedić komerc', '', 'sobna vrata'),
            new Partners('Kristić izolacija', '', 'izolacija ravnog krova')
        ])
    ];

    constructor(private projectsService: ProjectsService) { }

    setNews(news: News[]) {
        this.news = news;
        this.newsChanged.next(this.news.slice());
    }

    getNews() {
        return this.news.slice();
    }

    getNewsElement(index: number) {
        return this.news[index];
    }

    addProjectsToList(projects: Projects[]) {
        this.projectsService.addProjects(projects);
    }

    addNewsElement(newsEl: News) {
        this.news.push(newsEl);
        this.newsChanged.next(this.news.slice());
    }

    updateNewsElement(index: number, newNewsEl: News) {
        this.news[index] = newNewsEl;
        this.newsChanged.next(this.news.slice());
    }

    deleteNewsElement(index: number) {
        this.news.splice(index, 1);
        this.newsChanged.next(this.news.slice());
    }
}