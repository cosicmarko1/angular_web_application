import { Partners } from "../partners/partner.model";

export class News {
    public name: string;
    public description: string;
    public imagePath: string;
    public partners: Partners[];

    constructor(name: string, description: string, imagePath: string, partners: Partners[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.partners = partners;
    }
}