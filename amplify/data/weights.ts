import {  a  } from "@aws-amplify/backend";
import { ageEnum, careEnum, careerAmbition, commitmentsEnum, contractEnum, extentEnum, financeEnum, kidsAgeEnum, learningEnum, maritalEnum, recencyEnum, roleEnum, searchEnum, searchResultEnum, singleTypeEnum, supportEnum, workEnum } from "./constants";


export const schemaJSON =    {
      candidateName: {datatype:  a.string().required(),  weight: 1,    },
    //   candidateAge : {datatype: a.enum( Object.keys(ageEnum) ),  weight: 1,    },
      candidateId : {datatype: a.string().required(), weight: 1,    },
      candidateLocation : {datatype: a.string().required(), weight: 1,    },
      candidateEmail : {datatype: a.email().required(), weight: 1,    },
      candidatePhone : {datatype: a.phone().required(), weight: 1,    },
      interviewer : {datatype: a.string().required(),  weight: 1,    },
      Location : {datatype: a.string().required(),  weight: 1,    },
      interviewerJobLocation: {datatype: a.string(),  weight: 1,    },
      ResponsibilitiesAndRoles : {datatype: a.enum( Object.keys(roleEnum) ), weight: 1,    },
      TypeOfRoleSuitableFor: {datatype: a.enum( Object.keys(contractEnum) ),  weight: 1,    },
      typeOfContractSuggested: {datatype: a.enum( Object.keys(contractEnum) ),  weight: 1,    },
      DriveToWorkOrIntentToWork : {datatype: a.enum( Object.keys(workEnum) ),  weight: 1,    },
      ImmediateCareerAmbitions: {datatype: a.enum( Object.keys(careerAmbition)),  weight: 1,    },
      financialDriveToWork:  {datatype: a.enum( Object.keys(financeEnum) ),  weight: 1,    },
      learningReadiness: {datatype: a.enum( Object.keys(learningEnum) ), weight: 1,    },
      JobSearchAndReadiness :  {datatype:a.enum( Object.keys(searchEnum) ),  weight: 1,    },
      JobSearchSuccessForShortTermJobs: {datatype: a.enum( Object.keys(searchResultEnum) ),  weight: 1,    },
      lastWorked:  {datatype: a.enum( Object.keys(recencyEnum) ),  weight: 1,    },
      maritalStatus: {datatype: a.enum( Object.keys(maritalEnum) ),  weight: 1,    },
      Single:  {datatype: a.enum( Object.keys(singleTypeEnum) ),  weight: 1,    },
      AgeOfYoungestKid:  {datatype: a.enum( Object.keys(kidsAgeEnum) ),  weight: 1,    },
      SupportFromSpouseForKids: {datatype: a.enum( Object.keys(supportEnum) ),   weight: 1,    },
      SupportFromSpouseForHouseholdChores: {datatype: a.enum( Object.keys(supportEnum) ),  weight: 1,    },
      SupportFromHelpersForKids: {datatype: a.enum( Object.keys(supportEnum) ),  weight: 1,    },
      SupportFromHelpersForHouseholdChores: {datatype: a.enum( Object.keys(supportEnum) ),  weight: 1,    },
      SupportFromOtherFamilyMembersForKids: {datatype: a.enum( Object.keys(supportEnum) ),   weight: 1,    },    
      SupportFromOtherFamilyMembersForHouseholdChores: {datatype: a.enum( Object.keys(supportEnum) ),     weight: 1,    },
      careGivingResponsibilities: {datatype: a.enum( Object.keys(careEnum) ),         weight: 1,    },
    extentOfCareGiving: {datatype: a.enum( Object.keys(extentEnum) ),         weight: 1,    },
    SupportFromHelpersForCareGivingChores: {datatype: a.enum( Object.keys(supportEnum) ),         weight: 1,    },
    WillingnessToExpandHelpSystem: {datatype: a.enum( Object.keys(supportEnum) ),         weight: 1,    },
    OtherCommitments:  {datatype: a.enum( Object.keys(commitmentsEnum) ), weight:1, },
    AvailabilityOfHoursIdentifiedByInterviewer: {datatype: a.enum( Object.keys(commitmentsEnum) ),         weight: 1,    },
    comment : {datatype: a.string(),         weight: 1,    },
};


export function getField(searchFor: string | number){
    var result = {}
    Object .keys(schemaJSON).forEach(key => {        
        //@ts-ignored
        
        result[key] = schemaJSON[key][searchFor] 
    });
    return result;
}