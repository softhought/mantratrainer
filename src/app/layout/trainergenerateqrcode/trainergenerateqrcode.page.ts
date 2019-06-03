import { Component, OnInit , Input} from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-trainergenerateqrcode',
  templateUrl: './trainergenerateqrcode.page.html',
  styleUrls: ['./trainergenerateqrcode.page.scss'],
})
export class TrainergenerateqrcodePage implements OnInit {

  @Input() mobile;
  qrValue:any;
  constructor(navParams: NavParams,public modalCtrl: ModalController) { 
   this.qrValue = ""+navParams.get('mobile');
  }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
