import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';

type FUProperties = string | null;

export class DefaultFUBackground {
  icon= 'insert_photo';
  iconSize= '24px';
  iconColor= 'black';
  backgroundColor= 'transparent';

  constructor(icon:FUProperties = null,
              iconSize:FUProperties = null,
              iconColor:FUProperties = null,
              backgroundColor:FUProperties = null) {
    this.icon = icon === null ? this.icon : icon;
    this.iconSize = iconSize === null ? this.iconSize : iconSize;
    this.iconColor = iconColor === null ? this.iconColor : iconColor;
    this.backgroundColor = backgroundColor === null ? this.backgroundColor : backgroundColor;
  }
}

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css'],
  standalone: true,
  imports: [CommonModule]

})
export class FileUploaderComponent implements OnInit {

  message = null;
  imageSrc = null;

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  @Input() defaultValues: DefaultFUBackground = new DefaultFUBackground();
  @Input() showBackgroundImage = true;
  @Input() disableUploadOnClick = false;

  @Output() image = new EventEmitter();
  @Output() imageBackground = new EventEmitter();
  
  constructor() {
    this.fileInput = new ElementRef(null);
   }

  ngOnInit() {
    document.documentElement.style.setProperty('--background-color', this.defaultValues.backgroundColor);
    document.documentElement.style.setProperty('--icon-color', this.defaultValues.iconColor);
    document.documentElement.style.setProperty('--icon-size', this.defaultValues.iconSize);

  }

  upload() {
    this.fileInput.nativeElement.click();
  }

  clickUpload(){
    if(!this.disableUploadOnClick){
      this.upload();
    }
  }

   onFileChanged(event:any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
        this.imageBackground.emit(this.imageSrc);
      }
      this.image.emit(file);
    }
  }

}