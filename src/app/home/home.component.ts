import { ImagesService } from './../services/images.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageFormDialogComponent } from '../image-form-dialog/image-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  boxes: number[] = [];
  inputValue= '';
  name = 'Angular';
  animal = 'Dog';
  
  constructor(public dialog: MatDialog, private imagesService: ImagesService) {
    // fill boxes with 40 items
    for (let i = 0; i < 40; i++) {
      this.boxes.push(i);
    }
    // this.addData()
    // this.imagesService.testAddingData();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageFormDialogComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  

  onInputChange() {

  }
}
