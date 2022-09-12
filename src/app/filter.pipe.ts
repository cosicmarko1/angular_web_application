import { Pipe, PipeTransform } from "@angular/core";
import { Partners } from "./partners/partner.model";

@Pipe({ name: 'filter' })

export class FilterPipe implements PipeTransform {
    transform(items: Partners[], searchText: string): Partners[] {
        searchText = searchText ? searchText.toLocaleLowerCase() : null;
        return searchText ? items.filter((partners: Partners) =>
            partners.name.toLocaleLowerCase().indexOf(searchText) !== -1 || partners.description.toLocaleLowerCase().indexOf(searchText) !== -1) : items;
    }
}