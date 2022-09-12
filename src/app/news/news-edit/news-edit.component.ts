import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PartnersService } from 'src/app/partners/partners.service';
import { NewsService } from '../news.service';
import { Partners } from 'src/app/partners/partner.model';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {

  id: number;
  editMode = false;
  newsForm: FormGroup;
  partners: Partners[] = [];

  constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router, private partnersService: PartnersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
    this.partners = this.partnersService.getPartners();
  }

  onSubmit() {
    if (this.editMode) {
      this.newsService.updateNewsElement(this.id, this.newsForm.value);
    } else {
      this.newsService.addNewsElement(this.newsForm.value);
    }
    this.onCancel();
  }

  onAddPartner() {
    (<FormArray>this.newsForm.get('partners')).push(
      new FormGroup({
        'name': new FormControl(null),
        'description': new FormControl(null)
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let newsName = '';
    let newsImagePath = '';
    let newsDescription = '';
    let partners = new FormArray([]);

    if (this.editMode) {
      const news = this.newsService.getNewsElement(this.id);
      newsName = news.name;
      newsImagePath = news.imagePath;
      newsDescription = news.description;
      if (news['partners']) {
        for (let partners of news.partners) {
          partners.push(
            new FormGroup({
              'name': new FormControl(news.name, Validators.required),
              'imagePath': new FormControl(news.imagePath, Validators.required),
              'description': new FormControl(news.description, Validators.required),
              'partners': new FormControl(news.partners, Validators.required)
            })
          );
        }
      }
    }

    this.newsForm = new FormGroup({
      'name': new FormControl(newsName, Validators.required),
      'imagePath': new FormControl(newsImagePath, Validators.required),
      'description': new FormControl(newsDescription, Validators.required),
      'partners': partners

    });

  }

  get controls() { // a getter!
    return (<FormArray>this.newsForm.get('partners')).controls;
  }

  onDeleteElement(index: number) {
    (<FormArray>this.newsForm.get('partners')).removeAt(index);
  }

  onAddNews() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onDeleteNewsElement() {
    this.newsService.deleteNewsElement(this.id);
    this.router.navigate(['news/edit']);
  }

}
