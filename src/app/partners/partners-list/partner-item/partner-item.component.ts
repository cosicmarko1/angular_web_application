import { Component, Input, OnInit } from '@angular/core';
import { Partners } from '../../partner.model';

@Component({
  selector: 'app-partner-item',
  templateUrl: './partner-item.component.html',
  styleUrls: ['./partner-item.component.css']
})
export class PartnerItemComponent implements OnInit {

  @Input() partners: Partners;
  @Input() index: number;

  ngOnInit(): void {
  }

}
