import { Component, ViewChild } from '@angular/core';
import { DefaultFUBackground, FileUploaderComponent } from './file-uploader/file-uploader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-photo-history';
  image = null;
  @ViewChild('fileUploader', { static: false }) fileUploader: FileUploaderComponent = new FileUploaderComponent();
  fileUploaderOptions: DefaultFUBackground = new DefaultFUBackground(null, '48px');

}
