import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { ageEnum, careEnum, careerAmbition, commitmentsEnum, contractEnum, extentEnum, financeEnum, kidsAgeEnum, learningEnum, maritalEnum, recencyEnum, roleEnum, searchEnum, searchResultEnum, singleTypeEnum, supportEnum, workEnum } from "./constants";


const schema = a.schema({  
  Question : a.model({
      candidateName : a.string().required(),
      candidateAge : a.enum( Object.keys(ageEnum) ),
      candidateId : a.string().required(),
      candidateLocation : a.string().required(),
      interviewer : a.string().required(),
      Location: a.string().required(),
      interviewerJobLocation: a.string(),
      ResponsibilitiesAndRoles : a.enum( Object.keys(roleEnum) ),
      TypeOfRoleSuitableFor: a.enum( Object.keys(contractEnum) ),
      typeOfContractSuggested: a.enum( Object.keys(contractEnum) ),
      DriveToWorkOrIntentToWork : a.enum( Object.keys(workEnum) ),
      ImmediateCareerAmbitions: a.enum( Object.keys(careerAmbition)),
      financialDriveToWork: a.enum( Object.keys(financeEnum) ),
      learningReadiness: a.enum( Object.keys(learningEnum) ),
      JobSearchAndReadiness : a.enum( Object.keys(searchEnum) ),
      JobSearchSuccessForShortTermJobs: a.enum( Object.keys(searchResultEnum) ),
      lastWorked: a.enum( Object.keys(recencyEnum) ),
      maritalStatus: a.enum( Object.keys(maritalEnum) ),
      Single: a.enum( Object.keys(singleTypeEnum) ),
      AgeOfYoungestKid: a.enum( Object.keys(kidsAgeEnum) ),
      SupportFromSpouseForKids: a.enum( Object.keys(supportEnum) ),
      SupportFromSpouseForHouseholdChores: a.enum( Object.keys(supportEnum) ),
      SupportFromHelpersForKids: a.enum( Object.keys(supportEnum) ),
      SupportFromHelpersForHouseholdChores: a.enum( Object.keys(supportEnum) ),
      SupportFromOtherFamilyMembersForKids: a.enum( Object.keys(supportEnum) ),      
      SupportFromOtherFamilyMembersForHouseholdChores: a.enum( Object.keys(supportEnum) ),      
      careGivingResponsibilities: a.enum( Object.keys(careEnum) ),
      extentOfCareGiving: a.enum( Object.keys(extentEnum) ),
      SupportFromHelpersForCareGivingChores: a.enum( Object.keys(supportEnum) ),
      WillingnessToExpandHelpSystem: a.enum( Object.keys(supportEnum) ),
      OtherCommitments: a.enum( Object.keys(commitmentsEnum) ),
      AvailabilityOfHoursIdentifiedByInterviewer: a.integer(),
      comment : a.string(),
    })
    .authorization((allow: { publicApiKey: () => any; }) => [allow.publicApiKey()]),
});

export type FormSchema = ClientSchema<typeof schema>;
// console.log(schema.models["Question"]);
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
