/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      AgeOfYoungestKid
      AvailabilityOfHoursIdentifiedByInterviewer
      DriveToWorkOrIntentToWork
      ImmediateCareerAmbitions
      JobSearchAndReadiness
      JobSearchSuccessForShortTermJobs
      Location
      OtherCommitments
      ResponsibilitiesAndRoles
      Single
      SupportFromHelpersForCareGivingChores
      SupportFromHelpersForHouseholdChores
      SupportFromHelpersForKids
      SupportFromOtherFamilyMembersForHouseholdChores
      SupportFromOtherFamilyMembersForKids
      SupportFromSpouseForHouseholdChores
      SupportFromSpouseForKids
      TypeOfRoleSuitableFor
      WillingnessToExpandHelpSystem
      candidateAge
      candidateId
      candidateLocation
      candidateName
      careGivingResponsibilities
      comment
      createdAt
      extentOfCareGiving
      financialDriveToWork
      id
      interViewDate
      interviewer
      interviewerJobLocation
      lastWorked
      learningReadiness
      maritalStatus
      typeOfContractSuggested
      updatedAt
      __typename
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        AgeOfYoungestKid
        AvailabilityOfHoursIdentifiedByInterviewer
        DriveToWorkOrIntentToWork
        ImmediateCareerAmbitions
        JobSearchAndReadiness
        JobSearchSuccessForShortTermJobs
        Location
        OtherCommitments
        ResponsibilitiesAndRoles
        Single
        SupportFromHelpersForCareGivingChores
        SupportFromHelpersForHouseholdChores
        SupportFromHelpersForKids
        SupportFromOtherFamilyMembersForHouseholdChores
        SupportFromOtherFamilyMembersForKids
        SupportFromSpouseForHouseholdChores
        SupportFromSpouseForKids
        TypeOfRoleSuitableFor
        WillingnessToExpandHelpSystem
        candidateAge
        candidateId
        candidateLocation
        candidateName
        careGivingResponsibilities
        comment
        createdAt
        extentOfCareGiving
        financialDriveToWork
        id
        interViewDate
        interviewer
        interviewerJobLocation
        lastWorked
        learningReadiness
        maritalStatus
        typeOfContractSuggested
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
