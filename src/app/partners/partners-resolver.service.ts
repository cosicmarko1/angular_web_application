import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Partners } from "./partner.model";
import { PartnersService } from "./partners.service";

@Injectable({ providedIn: 'root' })

export class PartnersResolverService implements Resolve<Partners[]> {

    constructor(private dataStorageService: DataStorageService, private partnersService: PartnersService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const partners = this.partnersService.getPartners();
        if (partners.length === 0) {
            return this.dataStorageService.fetchPartners();
        } else {
            return partners;
        }
    }
}