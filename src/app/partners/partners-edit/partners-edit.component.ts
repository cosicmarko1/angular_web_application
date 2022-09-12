import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Partners } from '../partner.model';
import { PartnersService } from '../partners.service';

@Component({
  selector: 'app-partners-edit',
  templateUrl: './partners-edit.component.html',
  styleUrls: ['./partners-edit.component.css']
})
export class PartnersEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') partnerForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedPartnerIndex: number;
  editedPartner: Partners;

  constructor(private route: ActivatedRoute, private partnersService: PartnersService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.partnersService.startedEditing.subscribe(
      (index: number) => {
        this.editedPartnerIndex = index;
        this.editMode = true;
        this.editedPartner = this.partnersService.getPartner(index);
        this.partnerForm.setValue({
          name: this.editedPartner.name,
          imagePath: this.editedPartner.imagePath,
          description: this.editedPartner.description
        })
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newPartner = new Partners(value.name, value.imagePath, value.description);
    if (this.editMode) {
      this.partnersService.updatePartner(this.editedPartnerIndex, newPartner);
    } else {
      this.partnersService.addPartner(newPartner);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.partnerForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.partnersService.deletePartner(this.editedPartnerIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
