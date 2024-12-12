import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { ageEnum, careEnum, careerAmbition, commitmentsEnum, contractEnum, extentEnum, financeEnum, learningEnum, maritalEnum, recencyEnum, roleEnum, searchEnum, searchResultEnum, singleTypeEnum, supportEnum, workEnum } from "./constants";


const schema = a.schema({  
  Question : a.model({
      candidateName : a.string().required(),
      candidateId : a.string().required(),
      candidateLocation : a.string().required(),
      interviewer : a.string().required(),
      interviewDate : a.date().required(),
      jobLocation: a.string().required(),
      roles : a.enum( Object.keys(roleEnum) ),
      interviewerJobLocation: a.string(),
      typeOfContract: a.enum( Object.keys(contractEnum) ),
      driveToWork : a.enum( Object.keys(workEnum) ),
      careerAmbition: a.enum( Object.keys(careerAmbition)),
      financialDrive: a.enum( Object.keys(financeEnum) ),
      learningReadiness: a.enum( Object.keys(learningEnum) ),
      jobSearch : a.enum( Object.keys(searchEnum) ),
      jobSuccess: a.enum( Object.keys(searchResultEnum) ),
      lastWorked: a.enum( Object.keys(recencyEnum) ),
      maritalStatus: a.enum( Object.keys(maritalEnum) ),
      singleType: a.enum( Object.keys(singleTypeEnum) ),
      kidsAge: a.enum( Object.keys(ageEnum) ),
      spouseSupportKids: a.enum( Object.keys(supportEnum) ),
      helperSupportKids: a.enum( Object.keys(supportEnum) ),
      familySupportKids: a.enum( Object.keys(supportEnum) ),
      spouseSupportHousehold: a.enum( Object.keys(supportEnum) ),
      helperSupportHousehold: a.enum( Object.keys(supportEnum) ),
      familySupportHousehold: a.enum( Object.keys(supportEnum) ),      
      careGiving: a.enum( Object.keys(careEnum) ),
      extentOfCareGiving: a.enum( Object.keys(extentEnum) ),
      helperSupportCareGiving: a.enum( Object.keys(supportEnum) ),
      readyToExtendSupport: a.enum( Object.keys(supportEnum) ),
      OtherCommitments: a.enum( Object.keys(commitmentsEnum) ),
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
