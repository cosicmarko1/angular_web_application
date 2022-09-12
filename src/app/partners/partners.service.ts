import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Partners } from "./partner.model";

@Injectable({ providedIn: 'root' })

export class PartnersService {

    partnersChanged = new Subject<Partners[]>();
    startedEditing = new Subject<number>();

    private partners: Partners[] = [
        new Partners('Delta Color', '/assets/logo/logo_deltacolor.png', 'Građevinski materijal, sanitarije'),
        new Partners('Fero Term', '/assets/logo/logo_feroterm.webp', 'Sanitarije'),
        new Partners('Enmon', '/assets/logo/logo_enmon2.jpg', 'Sanitarije'),
        new Partners('Metalka', '/assets/logo/logo_metalka.jpg', 'Građevinski i elektro materijal'),
        new Partners('Izgradnja Mađarević', '/assets/logo/logo_madarevic.png', 'Građevinski materijal'),
        new Partners('Kristić izolacija', '/assets/logo/logo_kristic2.jpg', 'Hidroizolacije krovova i terasa'),
        new Partners('AG keramika', '/assets/logo/logo_agkeramika.jpg', 'Keramičarske usluge'),
        new Partners('Sjedić komerc', '/assets/logo/logo_sejdic.png', 'Sobna vrata'),
        new Partners('Građevinske usluge Monika', '/assets/logo/logo_monika.jpg', 'Građevinske usluge'),
        new Partners('Constructo', '/assets/logo/logo_constructo.png', 'Projektiranje'),
        new Partners('JER-ING', '/assets/logo/logo_jering.jpg', 'Projektiranje'),
        new Partners('Đaković montaža', '/assets/logo/logo_dakovicmontaza.jpg', 'PVC stolarija'),
        new Partners('Elektroinstalaterski obrt Lušić', '/assets/logo/logo_lusic.jpg', 'Elektroinstalaterske usluge')
    ];

    // private partners: Partners[] = [];

    setPartners(partners: Partners[]) {
        this.partners = partners;
        this.partnersChanged.next(this.partners.slice());
    }

    getPartners() {
        return this.partners.slice();
    }

    getPartner(index: number) {
        return this.partners[index];
    }

    addPartner(partner: Partners) {
        this.partners.push(partner);
        this.partnersChanged.next(this.partners.slice());
    }

    addPartners(partners: Partners[]) {
        this.partners.push(...partners);
        this.partnersChanged.next(this.partners.slice());
    }

    updatePartner(index: number, partner: Partners) {
        this.partners[index] = partner;
        this.partnersChanged.next(this.partners.slice());
    }

    deletePartner(index: number) {
        this.partners.splice(index, 1);
        this.partnersChanged.next(this.partners.slice());
    }

}