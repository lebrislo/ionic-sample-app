import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {

  constructor(public photoService: PhotoService,
    public actionSheetController: ActionSheetController
  ) { }

  ionViewWillEnter() {
    console.log('Tab2 Page Will Enter');
  }

  ionViewDidEnter() {
    console.log('Tab2 Page Did Enter');
  }

  ionViewWillLeave() {
    console.log('Tab2 Page Will Leave');
  }

  ionViewDidLeave() {
    console.log('Tab2 Page Did Leave');
  }

  ngOnInit(): void {
    console.log('Tab2 Page Init');
  }
  ngOnDestroy(): void {
    console.log('Tab2 Page Destroy');
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
          }
      }]
    });
    await actionSheet.present();
  }

}
