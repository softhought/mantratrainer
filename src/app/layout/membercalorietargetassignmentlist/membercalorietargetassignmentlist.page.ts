import { Component, OnInit } from '@angular/core';
import { HttpRequestHandlerService } from 'src/app/services/http-request-handler.service';
import { NavController, ToastController  } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { animate, trigger, state, transition, style } from '@angular/animations';


@Component({
  selector: 'app-membercalorietargetassignmentlist',
  templateUrl: './membercalorietargetassignmentlist.page.html',
  styleUrls: ['./membercalorietargetassignmentlist.page.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class MembercalorietargetassignmentlistPage implements OnInit {
  weeklyNotAssignedTargetsMemberList = [];

  calorieAssingmentFormGroup:FormGroup;
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;
  isDataAvailable = false;

  constructor(private _httpRequestHandlerService:HttpRequestHandlerService,public toastController: ToastController,fb: FormBuilder) { 
    this.calorieAssingmentFormGroup = fb.group({
      'calorieValue': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    })

  }

  ngOnInit() {
    this.getWeeklyNotAssignedTargetsMemberList();
  }


  getWeeklyNotAssignedTargetsMemberList(){

    let response;
    this._httpRequestHandlerService.getWeeklyNotAssignedTargetsMemberList("CALORIE",this.page).then(data => {
    response = data;
  
    

    if(response.STATUS==200 && response.STATUS_MSG=="SUCCESS"){

      let weeklyNotAssignedTargetsMember = response.RESULT;
      this.weeklyNotAssignedTargetsMemberList = response.RESULT;
      
      if( this.weeklyNotAssignedTargetsMemberList.length > 0){
        this.isDataAvailable = true;
      }
   }
    else{
      this.presentToastWithOptions('Some Problem.Please try again later...','bottom');
    }
  

  },
    error => {
      console.log(error);
        console.log("Error on login");
    });

  }



  

  submitForm(value,memberObj,srl){
    console.log(value);
    console.log(memberObj);

    (document.querySelector('#calorieTargetSendBtn_'+srl) as HTMLElement).style.display = 'none';
    (document.querySelector('#calorieTargetLoaderBtn_'+srl) as HTMLElement).style.display = 'block';
   

    let formData = {
      'calorie_target_value' : value,
      'membership_no' : memberObj.MEMBERSHIP_NO,
      'member_id' : memberObj.CUS_ID,
      'member_card' : memberObj.CUS_CARD,
      'member_branch' : memberObj.CUS_BRANCH
    };



    
    
    let response;
    this._httpRequestHandlerService.assignMemberCalorieTarget(formData ).then((data: any) => {

      if(data.STATUS==200 && data.STATUS_MSG=="SUCCESS"){
        response = data.RESULT;
       // this.router.navigate(['/member-machine-assignment']);
       (document.querySelector('#calorieTargetSendBtn_'+srl) as HTMLElement).style.display = 'block';
       (document.querySelector('#calorieTargetLoaderBtn_'+srl) as HTMLElement).style.display = 'none';
       this.weeklyNotAssignedTargetsMemberList.splice(srl, 1);
      }
     

     
    }, (error) => {
      console.log(error);
    })


  }


    
  loadData(event){
    this.isDataAvailable = true;
    this.page = this.page+1;
    setTimeout(() => {
      let response;
      this._httpRequestHandlerService.getWeeklyNotAssignedTargetsMemberList("CALORIE",this.page).then(data => {
      response = data;
      
      let weeklyNotAssignedTargetsMember = response.RESULT;
      let count = Object.keys(weeklyNotAssignedTargetsMember).length;
        
        for(let i=0; i<count ; i++) {
          this.weeklyNotAssignedTargetsMemberList.push(response.RESULT[i]);
        }

        if(count>0){
          this.isDataAvailable = true;
        }

      },
      error => {
        console.log(error);
          console.log("Error on fetching ");
      });
      event.target.complete();
      }, 1000);

  }



  async presentToastWithOptions(msg,pos) {
    const toast = await this.toastController.create({
      message: msg,
      showCloseButton: true,
      position: pos,
      animated : true,
      color:'light',
      keyboardClose:true,
      closeButtonText: 'X',
      duration:3000,
      cssClass:'customToastCls'
    });
    toast.present();
  }




}
