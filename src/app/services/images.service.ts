import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Image } from '../models/Image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private firestore: AngularFirestore) { }

  testAddingData() {
    const tutorialsRef = this.firestore.collection('my-images');
    const image = { name: 'Image1', description: 'lslallalala' };
    tutorialsRef.add({ ...image });
    
  }

  addData(image: Image) {
    this.firestore.collection('items').add({ name: 'Item 1' })
      .then(() => console.log('Data added successfully'))
      .catch(error => console.error('Error adding data:', error));
  }

  getData() {
    this.firestore.collection('items').get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      });
  }
}
