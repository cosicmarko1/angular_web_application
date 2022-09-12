import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsEditComponent } from './projects/projects-edit/projects-edit.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactComponent } from './contact/contact.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { PartnersEditComponent } from './partners/partners-edit/partners-edit.component';
import { PartnersListComponent } from './partners/partners-list/partners-list.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { ProjectsDetailsComponent } from './projects/projects-details/projects-details.component';
import { NewsItemComponent } from './news/news-list/news-item/news-item.component';
import { ProjectItemComponent } from './projects/projects-list/project-item/project-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ProjectsService } from './projects/projects.service';
import { AppRoutingModule } from './app-routing.module';
import { NewsStartComponent } from './news/news-start/news-start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsService } from './news/news.service';
import { ProjectsStartComponent } from './projects/projects-start/projects-start.component';
import { ImageDirective } from './shared/image.directive';
import { ImagesMuravicevaComponent } from './projects/images-muraviceva/images-muraviceva.component';
import { ImagesBakacevaComponent } from './projects/images-bakaceva/images-bakaceva.component';
import { ImagesTeslinaComponent } from './projects/images-teslina/images-teslina.component';
import { ImagesGundulicevaComponent } from './projects/images-gunduliceva/images-gunduliceva.component';
import { ImagesStrossmayerovaComponent } from './projects/images-strossmayerova/images-strossmayerova.component';
import { SearchPartnersComponent } from './partners/search-partners/search-partners.component';
import { PartnersService } from './partners/partners.service';
import { FilterPipe } from './filter.pipe';
import { PartnerItemComponent } from './partners/partners-list/partner-item/partner-item.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    NewsEditComponent,
    ProjectsComponent,
    ProjectsEditComponent,
    PartnersComponent,
    ContactComponent,
    NewsListComponent,
    ProjectsListComponent,
    PartnersEditComponent,
    PartnersListComponent,
    NewsDetailsComponent,
    ProjectsDetailsComponent,
    NewsItemComponent,
    ProjectItemComponent,
    DropdownDirective,
    NewsStartComponent,
    ProjectsStartComponent,
    ImageDirective,
    ImagesMuravicevaComponent,
    ImagesBakacevaComponent,
    ImagesTeslinaComponent,
    ImagesGundulicevaComponent,
    ImagesStrossmayerovaComponent,
    SearchPartnersComponent,
    FilterPipe,
    PartnerItemComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProjectsService, NewsService, PartnersService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
