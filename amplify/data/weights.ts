import {  type ClientSchema, a, defineData,  } from "@aws-amplify/backend";
import {  ModelField } from "@aws-amplify/data-schema";
import { recencyEnum, maritalEnum, singleTypeEnum, ageEnum, supportEnum, careEnum, extentEnum, commitmentsEnum } from "./constants";
 

export const schemaJSON =    {
    candidateName : {datatype: a.string(),         weight: 1,    },
    candidateId : {datatype: a.integer(),         weight: 1,    },
    candidateLocation : {datatype: a.integer(),         weight: 1,    },
    interviewer : {datatype: a.integer(),         weight: 1,    },
    interviewDate : {datatype: a.date().required(),         weight: 1,    },
    jobLocation: {datatype: a.integer(),         weight: 1,    },
    roles : {datatype: a.integer(),         weight: 1,    },
    interviewerJobLocation: {datatype: a.integer(),         weight: 1,    },
    typeOfContract: {datatype: a.integer(),         weight: 1,    },
    driveToWork : {datatype: a.integer(),         weight: 1,    },
    careerAmbition: {datatype: a.integer(),         weight: 1,    },
    financialDrive: {datatype: a.integer(),         weight: 1,    },
    learningReadiness: {datatype: a.integer(),         weight: 1,    },
    jobSearch : {datatype: a.integer(),         weight: 1,    },
    jobSuccess: {datatype: a.integer(),         weight: 1,    },
    lastWorked: {datatype: a.enum( Object.keys(recencyEnum) ),         weight: 1,    },
    maritalStatus: {datatype: a.enum( Object.keys(maritalEnum) ),         weight: 1,    },
    singleType: {datatype: a.enum( Object.keys(singleTypeEnum) ),         weight: 1,    },
    kidsAge: {datatype: a.enum( Object.keys(ageEnum) ),         weight: 1,    },
    spouseSupportKids: {datatype: a.enum( Object.keys(supportEnum) ),         weight: 1,    },
    helperSupportKids: {datatype: a.enum( Object.keys(supportEnum) ),         weight: 1,    },
    familySupportKids: {datatype: a.enum( Object.keys(supportEnum) ),         weight: 1,    },
    spouseSupportHousehold: {datatype: a.enum( Object.keys(supportEnum) ),         weight: 1,    },
    helperSupportHousehold: {datatype: a.enum( Object.keys(supportEnum) ),         weight: 1,    },
    familySupportHousehold: {datatype: a.enum( Object.keys(supportEnum) ),         weight: 1,    },      
    careGiving: {datatype: a.enum( Object.keys(careEnum) ),         weight: 1,    },
    extentOfCareGiving: {datatype: a.enum( Object.keys(extentEnum) ),         weight: 1,    },
    helperSupportCareGiving: {datatype: a.enum( Object.keys(supportEnum) ),         weight: 1,    },
    readyToExtendSupport: {datatype: a.enum( Object.keys(supportEnum) ),         weight: 1,    },
    OtherCommitments: {datatype: a.enum( Object.keys(commitmentsEnum) ),         weight: 1,    },
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

console.log("-------------------------------------------------------------******************************************")

console.log(getField("datatype"));