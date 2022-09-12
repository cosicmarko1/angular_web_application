import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Partners } from '../partner.model';
import { PartnersService } from '../partners.service';

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.css']
})
export class PartnersListComponent implements OnInit, OnDestroy {

  partners: Partners[];
  subscription: Subscription;
  searchText = '';

  // partners: Partners[] = [
  //   new Partners('Delta Color', '/assets/logo/logo_deltacolor.png', 'Građevinski materijal, sanitarije'),
  //   new Partners('Fero Term', '/assets/logo/logo_feroterm.webp', 'Sanitarije'),
  //   new Partners('Enmon', '/assets/logo/logo_enmon2.jpg', 'Sanitarije'),
  //   new Partners('Metalka', '/assets/logo/logo_metalka.jpg', 'Građevinski i elektro materijal'),
  //   new Partners('Izgradnja Mađarević', '/assets/logo/logo_madarevic.png', 'Građevinski materijal'),
  //   new Partners('Kristić izolacija', '/assets/logo/logo_kristic2.jpg', 'Hidroizolacije krovova i terasa'),
  //   new Partners('AG keramika', '/assets/logo/logo_agkeramika.jpg', 'Keramičarske usluge'),
  //   new Partners('Sejdić komerc', '/assets/logo/logo_sejdic.png', 'Sobna vrata'),
  //   new Partners('Građevinske usluge Monika', '/assets/logo/logo_monika.jpg', 'Građevinske usluge'),
  //   new Partners('Constructo', '/assets/logo/logo_constructo.png', 'Projektiranje'),
  //   new Partners('JER-ING', '/assets/logo/logo_jering.jpg', 'Projektiranje'),
  //   new Partners('Đaković montaža', '/assets/logo/logo_dakovicmontaza.jpg', 'PVC stolarija'),
  //   new Partners('Elektroinstalaterski obrt Lušić', '/assets/logo/logo_lusic.jpg', 'Elektroinstalaterske usluge'),
  // ];

  constructor(private partnersService: PartnersService, private router: Router, private route: ActivatedRoute, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.subscription = this.partnersService.partnersChanged.subscribe(
      (partners: Partners[]) => {
        this.partners = partners;
      }
    );
    this.partners = this.partnersService.getPartners();
  }

  onSavePartners() {
    this.dataStorageService.storePartners();
  }

  onFetchPartners() {
    this.dataStorageService.fetchPartners().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
