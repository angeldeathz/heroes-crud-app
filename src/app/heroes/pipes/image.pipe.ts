import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    let url: string = "assets/images/no-image.png";

    // if (!heroe.alt_img) {
    //   url = "assets/images/"+ heroe.id + ".jpg";
    // } else {
    //   url = heroe.alt_img;
    // }

    if (heroe.alt_img) {
      url = heroe.alt_img;
    }

    if (heroe.id) {
      url = "assets/images/"+ heroe.id + ".jpg";
    }

    if (heroe.id && heroe.alt_img) { 
      url = heroe.alt_img;
    }

    return url;
  }

}
