import { ImagesService } from './../services/images.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageFormDialogComponent } from '../image-form-dialog/image-form-dialog.component';
import { Image } from '../models/Image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  boxes: any[] = [];
  inputValue = '';
  name = 'Angular';
  animal = 'Dog';

  constructor(public dialog: MatDialog, private imagesService: ImagesService) {
    // fill boxes with 40 items
    for (let i = 0; i < 40; i++) {
      this.boxes.push(i);
    }
    this.imagesService.getData().subscribe(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        const id = doc.id
        const data:any = doc.data()
        const imgObj = {...data,id}
        const newImage = Image.create(imgObj)
        this.boxes.unshift(newImage);
      });
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageFormDialogComponent, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }



  onInputChange() {

  }
}
