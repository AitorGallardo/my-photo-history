import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Image } from '../models/Image';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  cloudinary_key = environment.cloudinary_key;
  constructor(private firestore: AngularFirestore) { }

  async testAddingData(image:Image) {
    const img_src = await this.fileUpload(image.image_blob)
    image.image_src = img_src;
    const {image_blob,...uploadingObj} = image;
    const tutorialsRef = this.firestore.collection('my-images');
    tutorialsRef.add({ ...uploadingObj });
    
  }

  addData(image: Image) {
    this.firestore.collection('items').add({ name: 'Item 1' })
      .then(() => console.log('Data added successfully'))
      .catch(error => console.error('Error adding data:', error));
  }

  getData() {
    return this.firestore.collection('my-images').get();
      // .subscribe(querySnapshot => {
      //   console.log('entra subscribe')
      //   querySnapshot.forEach(doc => {
      //     console.log(doc.id, '=>', doc.data());
      //   });
      // });
  }

  fileUpload = async (imageFile: any) => {
    if (!imageFile) throw new Error('File does not exist');
    const cloudUrl = `https://api.cloudinary.com/v1_1/${this.cloudinary_key}/upload`;
    
    const formData = new FormData();
    formData.append('upload_preset', 'my-photo-history');
    formData.append('file', imageFile);
    try {
        const resp = await fetch(cloudUrl, {
        method: 'POST',
        body: formData,
        });
        if (resp.ok) {
        const cloudResp = await resp.json();
        return cloudResp.secure_url;
        } else {
        throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
    }
}
