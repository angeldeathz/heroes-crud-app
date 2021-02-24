import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string): string {

    console.log(value);

    let url: string = "assets/images/no-image.png";

    if (value) {
      url = "assets/images/"+ value + ".jpg";
    }

    return url;
  }

}
