import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class GlobalconstantService {
  decodedTokenData;
  emplID;
  designationID;
  branchCode;
  employeeName;
  employeeDesig;





  constructor(private storage:Storage) { }
  
 // private APIURL = "http://192.168.2.16:8088/ehrsystem/ehrsrvc/";
  //private APIURL = "http://192.168.2.10/ehrsystem/ehrsrvc/";
  //private APIURL = "http://127.0.0.1:8011/ehrsystem/ehrsrvc/";
  //private APIURL = "http://127.0.0.1/ehrsystem/ehrsrvc/";
  // private APIURL = "http://127.0.0.1:8088/ehrsystem/ehrsrvc/";
  // private APIURL = "http://127.0.0.1/ehr/ehrsrvc/";
 // private APIURL =  "http://13.234.41.243/devehrsystem/ehrsrvc/";
  //private APIURL = "http://medewise.com/medehr/";
  // private APIURL = "http://softhought.com/medewise/ehrsrvc/";

  //private APIURL =  "http://13.234.41.243/ehr/ehrsrvc/";
  //private APIURL = "http://127.0.0.1/Mantrapro/";

  private APIURL = "https://mantrahealthzone.co.in/";
  private APIKEY = "24ecdccb1258eaacfd441e012ac034392403c692";

  // URL INFO
  //public signin = this.APIURL+"login/getLogin" ;

  public signin = this.APIURL+"mantratrainerAppService/verifyEmplMobile";

  public sendotp_URL = this.APIURL+"mantratrainerAppService/sendOTP";
  public verifyotp_URL = this.APIURL+"mantratrainerAppService/verifyOTP";
  public setloginpin_URL = this.APIURL+"mantratrainerAppService/setLoginPin";
  public login_URL = this.APIURL+"mantratrainerAppService/verifyLogin";

  public verifymobile_URL = this.APIURL+"mantratrainerAppService/verifyMobile";

  /**
   * Master data Fetch
   */

  public allbranchList_URL = this.APIURL+"mantratrainerAppService/getAllBranchList";
  public exerciseList_URL = this.APIURL+"mantratrainerAppService/getExerciseList";
  public exerciseByID_URL = this.APIURL+"mantratrainerAppService/getExerciseById";

  public todaysmemberList_URL = this.APIURL+"mantratrainerAppService/getTodaysMemberList";
  public todaysAssignedMemberList_URL = this.APIURL+"mantratrainerAppService/getTodaysAssignedMemberList";
  public todaysnonAssignedMachineList_URL = this.APIURL+"mantratrainerAppService/getTodaysNonAssignedMachineList";

  public assignexerciseToMember_URL = this.APIURL+"mantratrainerAppService/assignExerciseTomember";
  public assignedMemberDetailByID_URL = this.APIURL+"mantratrainerAppService/assignedMemberDetailByID";
  public stopAssignedExercise_URL = this.APIURL+"mantratrainerAppService/stopAssignedExercise";

  /**
   * @URL List for member target given module
   */
  public weeklyNotAssignedTargetsMemberList = this.APIURL+"mantratrainerAppService/getweeklyNotAssignedTargetsMembersList";
  public assigncalorieTargetToMember_URL = this.APIURL+"mantratrainerAppService/assigncalorieTargetToMember";
  public weeklyAssignedTargetsMemberList = this.APIURL+"mantratrainerAppService/getweeklyAssignedTargetsMembersList";


  /**
   * @URL attendance given module
   */
  public captureAttendance_URL = this.APIURL+"mantratrainerAppService/captureAttendance";



  getApiURL(){
    return this.APIURL;
  }
 
  getAPiKey(){
    return this.APIKEY;
  }

  public getToken() {
    let token;
    this.storage.get('token').then((data)=>{
      console.log(data);
      console.log("DATA Before");
      token=data;
      console.log("DATA After");
      console.log(token);
     
    });
    return token;
   // return localStorage.getItem("token");
  }



  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

/*
  getUserSessionData(){
    let userSession = {};
    this.storage.get('token').then((tokenValue) => {
     this.decodedTokenData = this.getDecodedAccessToken(tokenValue);
      this.emplID = this.decodedTokenData.data.empl_id;
      this.designationID = this.decodedTokenData.data.desigID;
      this.branchCode = this.decodedTokenData.data.branchCD;
      this.employeeName = this.decodedTokenData.data.emplName;
      this.employeeDesig = this.decodedTokenData.data.emplDesig;
      
     });
     userSession = {
      "emplID":this.emplID,
      "designationID":this.designationID,
      "branchCode":this.branchCode,
      "employeeName":this.employeeName,
      "employeeDesig":this.employeeDesig
     };
     return userSession;
 
  }
  */

}
