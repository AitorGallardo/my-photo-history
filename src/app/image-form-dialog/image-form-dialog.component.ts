import { CommonModule } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DefaultFUBackground, FileUploaderComponent } from '../file-uploader/file-uploader.component';

type DialogData = {
  animal: string;
  name: string;
};

@Component({
  selector: 'app-image-form-dialog',
  templateUrl: './image-form-dialog.component.html',
  standalone: true,
  imports: [FileUploaderComponent, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,ReactiveFormsModule,CommonModule],
})

export class ImageFormDialogComponent {

  form: FormGroup;
  submitted = false;
  image = null;
  @ViewChild('fileUploader', { static: false }) fileUploader: FileUploaderComponent = new FileUploaderComponent();
  fileUploaderOptions: DefaultFUBackground = new DefaultFUBackground(null, '48px');

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ImageFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', []],
      labels: ['', []],
      image: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {

    this.submitted = true;

    console.warn('Your order has been submitted', this.form.value);

    if (this.form.valid) {

    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
