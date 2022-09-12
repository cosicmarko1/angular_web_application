import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective {

  constructor(private element: ElementRef) { }

  @HostListener('click')

  imageChanged() {
    var src: any = this.element.nativeElement.src;
    var prev: any = document.getElementById("preview");
    prev.src = src;
    var imageSlide = document.getElementsByClassName("img-slide");
    for (let i = 0; i < imageSlide.length; i++) {
      imageSlide[i].classList.remove("active");
    }
    this.element.nativeElement.parentElement.classList.add("active");
  }

}
