import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Partners } from '../partner.model';
import { PartnersService } from '../partners.service';

@Component({
  selector: 'app-search-partners',
  templateUrl: './search-partners.component.html',
  styleUrls: ['./search-partners.component.css']
})
export class SearchPartnersComponent implements OnInit, OnDestroy {

  partners: Partners[];
  subscription: Subscription;
  public searchText: Partners['name'];
  isTyped: false;

  constructor(public partnersService: PartnersService) { }

  ngOnInit(): void {
    this.subscription = this.partnersService.partnersChanged.subscribe((partners: Partners[]) => {
      this.partners = partners;
    }
    );
    this.partners = this.partnersService.getPartners();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
