import {Injectable } from '@angular/core';

export interface branchSelectionData { branchSelectionObj : any; }
export interface exerciseSelectionData { excersiceSelectionObj : any; }

export interface selectedMemberData { selectedMemberObj : any; }


@Injectable({
  providedIn: 'root'
})



export class DataShareService {
 
  /**
   * Declaration
   */
  branchSelection : branchSelectionData = { branchSelectionObj : "" };
  exerciseSelection : exerciseSelectionData = { excersiceSelectionObj : "" };
  selectedMember : selectedMemberData = { selectedMemberObj : "" };

  constructor() {}



/**
 * Branch selection Data Share
 * @param obj 
 */
setSelectedBranchDatas(obj){
  this.branchSelection.branchSelectionObj = obj;
}
getSelectedBranchDatas(){
  return this.branchSelection.branchSelectionObj;
}


/**
 * Exercises selection Data Share
 * @param obj 
 */
setSelectedExerciseDatas(obj){
  this.exerciseSelection.excersiceSelectionObj = obj;
}
getSelectedExerciseDatas(){
  return this.exerciseSelection.excersiceSelectionObj;
}


/**
 * Exercises selection Data Share
 * @param obj 
 */
setSelectedMemberDatas(obj){
  this.selectedMember.selectedMemberObj = obj;
}
getSelectedMemberDatas(){
  return this.selectedMember.selectedMemberObj;
}



}
