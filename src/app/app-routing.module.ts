import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { NewsDetailsComponent } from "./news/news-details/news-details.component";
import { NewsEditComponent } from "./news/news-edit/news-edit.component";
import { NewsResolverService } from "./news/news-resolver.service";
import { NewsStartComponent } from "./news/news-start/news-start.component";
import { NewsComponent } from "./news/news.component";
import { PartnersEditComponent } from "./partners/partners-edit/partners-edit.component";
import { PartnersResolverService } from "./partners/partners-resolver.service";
import { PartnersComponent } from "./partners/partners.component";
import { ProjectsDetailsComponent } from "./projects/projects-details/projects-details.component";
import { ProjectsEditComponent } from "./projects/projects-edit/projects-edit.component";
import { ProjectsResolverService } from "./projects/projects-resolver.service";
import { ProjectsStartComponent } from "./projects/projects-start/projects-start.component";
import { ProjectsComponent } from "./projects/projects.component";
import { UserLoginComponent } from "./user-login/user-login.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'news', component: NewsComponent, children: [
            { path: '', component: NewsStartComponent },
            { path: 'edit', component: NewsEditComponent, resolve: [NewsResolverService], canActivate: [AuthGuard] },
            { path: ':id', component: NewsDetailsComponent, resolve: [NewsResolverService] },
            { path: ':id/edit', component: NewsEditComponent, resolve: [NewsResolverService], canActivate: [AuthGuard] }
        ]
    },
    {
        path: 'projects', component: ProjectsComponent, children: [
            { path: '', component: ProjectsStartComponent, resolve: [ProjectsResolverService] },
            { path: 'edit', component: ProjectsEditComponent, resolve: [ProjectsResolverService], canActivate: [AuthGuard] },
            { path: ':id', component: ProjectsDetailsComponent, resolve: [ProjectsResolverService] },
            { path: ':id/edit', component: ProjectsDetailsComponent, resolve: [ProjectsResolverService], canActivate: [AuthGuard] }
        ]
    },
    { path: 'home', component: HomeComponent },
    {
        path: 'partners', component: PartnersComponent, children: [
            { path: 'edit', component: PartnersEditComponent, resolve: [PartnersResolverService], canActivate: [AuthGuard] },
            { path: ':id', component: PartnersComponent, resolve: [PartnersResolverService] },
            { path: ':id/edit', component: PartnersEditComponent, resolve: [PartnersResolverService], canActivate: [AuthGuard] }
        ]
    },
    { path: 'contact', component: ContactComponent },
    { path: 'userlogin', component: UserLoginComponent },
    { path: 'auth', component: AuthComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}