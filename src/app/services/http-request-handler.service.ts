import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalconstantService } from './globalconstant.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestHandlerService {

  constructor(public http: HttpClient,private global:GlobalconstantService) { 
  }


  getAllBranchList(){
    //let formValues = JSON.stringify({formData:formData});
    return new Promise(resolve => {
      this.http.get(this.global.allbranchList_URL).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getExerciseList(){
    return new Promise(resolve => {
      this.http.get(this.global.exerciseList_URL).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getTodaysMemberList(branch,page){
    //let formValues = JSON.stringify({formData:formData});
    return new Promise(resolve => {
      this.http.get(this.global.todaysmemberList_URL+"?branch="+branch+"&page="+page).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getTodaysAssignedMemberList(branch,page){
    return new Promise(resolve => {
      this.http.get(this.global.todaysAssignedMemberList_URL+"?branch="+branch+"&page="+page).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getNonAssignedMachineList(branch,selectedexercise){
    return new Promise(resolve => {
      this.http.get(this.global.todaysnonAssignedMachineList_URL+"?branch="+branch+"&exercise="+selectedexercise).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  
  getExerciseById(selectedexercise){
    return new Promise(resolve => {
      this.http.get(this.global.exerciseByID_URL+"?exercise="+selectedexercise).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  assignExerciseToMember(formObj,memberData){
     let formValues = JSON.stringify({formdata:formObj,memInfo:memberData });
    return new Promise(resolve => {
      this.http.post(this.global.assignexerciseToMember_URL,formValues).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getAssignedMemberDetailByID(assignedID){
    return new Promise(resolve => {
      this.http.get(this.global.assignedMemberDetailByID_URL+"?aid="+assignedID).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  stopExerciseProcess(formObj){
    let formValues = JSON.stringify({formdata:formObj});
   return new Promise(resolve => {
     this.http.post(this.global.stopAssignedExercise_URL,formValues).subscribe(data => {
       resolve(data);
     }, err => {
       console.log(err);
     });
   });
 }



 /**
  *@ HTTP Call For Member Target Given Module 
  *@date 24.05.2019
  *@By Mithilesh 
  */

  getWeeklyNotAssignedTargetsMemberList(value,page){
    let formValues = JSON.stringify({formdata:value,pageno:page});
    return new Promise(resolve => {
      this.http.post(this.global.weeklyNotAssignedTargetsMemberList,formValues).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
 

  assignMemberCalorieTarget(formObj){
    let formValues = JSON.stringify({formdata:formObj});
    return new Promise(resolve => {
     this.http.post(this.global.assigncalorieTargetToMember_URL,formValues).subscribe(data => {
       resolve(data);
     }, err => {
       console.log(err);
     });
   });
 }


 captureAttendance(formObj){
  let formValues = JSON.stringify({formdata:formObj});
  return new Promise(resolve => {
   this.http.post(this.global.captureAttendance_URL,formValues).subscribe(data => {
     resolve(data);
   }, err => {
     console.log(err);
   });
 });
}




getWeeklyAssignedTargetsMemberList(value,page){
  let formValues = JSON.stringify({formdata:value,pageno:page});
  return new Promise(resolve => {
    this.http.post(this.global.weeklyAssignedTargetsMemberList,formValues).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}


}
