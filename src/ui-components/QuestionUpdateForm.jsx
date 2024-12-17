/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getQuestion } from "./graphql/queries";
import { updateQuestion } from "./graphql/mutations";
const client = generateClient();
export default function QuestionUpdateForm(props) {
  const {
    id: idProp,
    question: questionModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    candidateName: "",
    candidateAge: "",
    candidateId: "",
    candidateLocation: "",
    interViewDate: "",
    interviewer: "",
    Location: "",
    interviewerJobLocation: "",
    ResponsibilitiesAndRoles: "",
    TypeOfRoleSuitableFor: "",
    typeOfContractSuggested: "",
    DriveToWorkOrIntentToWork: "",
    ImmediateCareerAmbitions: "",
    financialDriveToWork: "",
    learningReadiness: "",
    JobSearchAndReadiness: "",
    JobSearchSuccessForShortTermJobs: "",
    lastWorked: "",
    maritalStatus: "",
    Single: "",
    AgeOfYoungestKid: "",
    SupportFromSpouseForKids: "",
    SupportFromSpouseForHouseholdChores: "",
    SupportFromHelpersForKids: "",
    SupportFromHelpersForHouseholdChores: "",
    SupportFromOtherFamilyMembersForKids: "",
    SupportFromOtherFamilyMembersForHouseholdChores: "",
    careGivingResponsibilities: "",
    extentOfCareGiving: "",
    SupportFromHelpersForCareGivingChores: "",
    WillingnessToExpandHelpSystem: "",
    OtherCommitments: "",
    AvailabilityOfHoursIdentifiedByInterviewer: "",
    comment: "",
  };
  const [candidateName, setCandidateName] = React.useState(
    initialValues.candidateName
  );
  const [candidateAge, setCandidateAge] = React.useState(
    initialValues.candidateAge
  );
  const [candidateId, setCandidateId] = React.useState(
    initialValues.candidateId
  );
  const [candidateLocation, setCandidateLocation] = React.useState(
    initialValues.candidateLocation
  );
  const [interViewDate, setInterViewDate] = React.useState(
    initialValues.interViewDate
  );
  const [interviewer, setInterviewer] = React.useState(
    initialValues.interviewer
  );
  const [Location, setLocation] = React.useState(initialValues.Location);
  const [interviewerJobLocation, setInterviewerJobLocation] = React.useState(
    initialValues.interviewerJobLocation
  );
  const [ResponsibilitiesAndRoles, setResponsibilitiesAndRoles] =
    React.useState(initialValues.ResponsibilitiesAndRoles);
  const [TypeOfRoleSuitableFor, setTypeOfRoleSuitableFor] = React.useState(
    initialValues.TypeOfRoleSuitableFor
  );
  const [typeOfContractSuggested, setTypeOfContractSuggested] = React.useState(
    initialValues.typeOfContractSuggested
  );
  const [DriveToWorkOrIntentToWork, setDriveToWorkOrIntentToWork] =
    React.useState(initialValues.DriveToWorkOrIntentToWork);
  const [ImmediateCareerAmbitions, setImmediateCareerAmbitions] =
    React.useState(initialValues.ImmediateCareerAmbitions);
  const [financialDriveToWork, setFinancialDriveToWork] = React.useState(
    initialValues.financialDriveToWork
  );
  const [learningReadiness, setLearningReadiness] = React.useState(
    initialValues.learningReadiness
  );
  const [JobSearchAndReadiness, setJobSearchAndReadiness] = React.useState(
    initialValues.JobSearchAndReadiness
  );
  const [
    JobSearchSuccessForShortTermJobs,
    setJobSearchSuccessForShortTermJobs,
  ] = React.useState(initialValues.JobSearchSuccessForShortTermJobs);
  const [lastWorked, setLastWorked] = React.useState(initialValues.lastWorked);
  const [maritalStatus, setMaritalStatus] = React.useState(
    initialValues.maritalStatus
  );
  const [Single, setSingle] = React.useState(initialValues.Single);
  const [AgeOfYoungestKid, setAgeOfYoungestKid] = React.useState(
    initialValues.AgeOfYoungestKid
  );
  const [SupportFromSpouseForKids, setSupportFromSpouseForKids] =
    React.useState(initialValues.SupportFromSpouseForKids);
  const [
    SupportFromSpouseForHouseholdChores,
    setSupportFromSpouseForHouseholdChores,
  ] = React.useState(initialValues.SupportFromSpouseForHouseholdChores);
  const [SupportFromHelpersForKids, setSupportFromHelpersForKids] =
    React.useState(initialValues.SupportFromHelpersForKids);
  const [
    SupportFromHelpersForHouseholdChores,
    setSupportFromHelpersForHouseholdChores,
  ] = React.useState(initialValues.SupportFromHelpersForHouseholdChores);
  const [
    SupportFromOtherFamilyMembersForKids,
    setSupportFromOtherFamilyMembersForKids,
  ] = React.useState(initialValues.SupportFromOtherFamilyMembersForKids);
  const [
    SupportFromOtherFamilyMembersForHouseholdChores,
    setSupportFromOtherFamilyMembersForHouseholdChores,
  ] = React.useState(
    initialValues.SupportFromOtherFamilyMembersForHouseholdChores
  );
  const [careGivingResponsibilities, setCareGivingResponsibilities] =
    React.useState(initialValues.careGivingResponsibilities);
  const [extentOfCareGiving, setExtentOfCareGiving] = React.useState(
    initialValues.extentOfCareGiving
  );
  const [
    SupportFromHelpersForCareGivingChores,
    setSupportFromHelpersForCareGivingChores,
  ] = React.useState(initialValues.SupportFromHelpersForCareGivingChores);
  const [WillingnessToExpandHelpSystem, setWillingnessToExpandHelpSystem] =
    React.useState(initialValues.WillingnessToExpandHelpSystem);
  const [OtherCommitments, setOtherCommitments] = React.useState(
    initialValues.OtherCommitments
  );
  const [
    AvailabilityOfHoursIdentifiedByInterviewer,
    setAvailabilityOfHoursIdentifiedByInterviewer,
  ] = React.useState(initialValues.AvailabilityOfHoursIdentifiedByInterviewer);
  const [comment, setComment] = React.useState(initialValues.comment);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = questionRecord
      ? { ...initialValues, ...questionRecord }
      : initialValues;
    setCandidateName(cleanValues.candidateName);
    setCandidateAge(cleanValues.candidateAge);
    setCandidateId(cleanValues.candidateId);
    setCandidateLocation(cleanValues.candidateLocation);
    setInterViewDate(cleanValues.interViewDate);
    setInterviewer(cleanValues.interviewer);
    setLocation(cleanValues.Location);
    setInterviewerJobLocation(cleanValues.interviewerJobLocation);
    setResponsibilitiesAndRoles(cleanValues.ResponsibilitiesAndRoles);
    setTypeOfRoleSuitableFor(cleanValues.TypeOfRoleSuitableFor);
    setTypeOfContractSuggested(cleanValues.typeOfContractSuggested);
    setDriveToWorkOrIntentToWork(cleanValues.DriveToWorkOrIntentToWork);
    setImmediateCareerAmbitions(cleanValues.ImmediateCareerAmbitions);
    setFinancialDriveToWork(cleanValues.financialDriveToWork);
    setLearningReadiness(cleanValues.learningReadiness);
    setJobSearchAndReadiness(cleanValues.JobSearchAndReadiness);
    setJobSearchSuccessForShortTermJobs(
      cleanValues.JobSearchSuccessForShortTermJobs
    );
    setLastWorked(cleanValues.lastWorked);
    setMaritalStatus(cleanValues.maritalStatus);
    setSingle(cleanValues.Single);
    setAgeOfYoungestKid(cleanValues.AgeOfYoungestKid);
    setSupportFromSpouseForKids(cleanValues.SupportFromSpouseForKids);
    setSupportFromSpouseForHouseholdChores(
      cleanValues.SupportFromSpouseForHouseholdChores
    );
    setSupportFromHelpersForKids(cleanValues.SupportFromHelpersForKids);
    setSupportFromHelpersForHouseholdChores(
      cleanValues.SupportFromHelpersForHouseholdChores
    );
    setSupportFromOtherFamilyMembersForKids(
      cleanValues.SupportFromOtherFamilyMembersForKids
    );
    setSupportFromOtherFamilyMembersForHouseholdChores(
      cleanValues.SupportFromOtherFamilyMembersForHouseholdChores
    );
    setCareGivingResponsibilities(cleanValues.careGivingResponsibilities);
    setExtentOfCareGiving(cleanValues.extentOfCareGiving);
    setSupportFromHelpersForCareGivingChores(
      cleanValues.SupportFromHelpersForCareGivingChores
    );
    setWillingnessToExpandHelpSystem(cleanValues.WillingnessToExpandHelpSystem);
    setOtherCommitments(cleanValues.OtherCommitments);
    setAvailabilityOfHoursIdentifiedByInterviewer(
      cleanValues.AvailabilityOfHoursIdentifiedByInterviewer
    );
    setComment(cleanValues.comment);
    setErrors({});
  };
  const [questionRecord, setQuestionRecord] = React.useState(questionModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getQuestion.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getQuestion
        : questionModelProp;
      setQuestionRecord(record);
    };
    queryData();
  }, [idProp, questionModelProp]);
  React.useEffect(resetStateValues, [questionRecord]);
  const validations = {
    candidateName: [{ type: "Required" }],
    candidateAge: [],
    candidateId: [{ type: "Required" }],
    candidateLocation: [{ type: "Required" }],
    interViewDate: [{ type: "Required" }],
    interviewer: [{ type: "Required" }],
    Location: [{ type: "Required" }],
    interviewerJobLocation: [],
    ResponsibilitiesAndRoles: [],
    TypeOfRoleSuitableFor: [],
    typeOfContractSuggested: [],
    DriveToWorkOrIntentToWork: [],
    ImmediateCareerAmbitions: [],
    financialDriveToWork: [],
    learningReadiness: [],
    JobSearchAndReadiness: [],
    JobSearchSuccessForShortTermJobs: [],
    lastWorked: [],
    maritalStatus: [],
    Single: [],
    AgeOfYoungestKid: [],
    SupportFromSpouseForKids: [],
    SupportFromSpouseForHouseholdChores: [],
    SupportFromHelpersForKids: [],
    SupportFromHelpersForHouseholdChores: [],
    SupportFromOtherFamilyMembersForKids: [],
    SupportFromOtherFamilyMembersForHouseholdChores: [],
    careGivingResponsibilities: [],
    extentOfCareGiving: [],
    SupportFromHelpersForCareGivingChores: [],
    WillingnessToExpandHelpSystem: [],
    OtherCommitments: [],
    AvailabilityOfHoursIdentifiedByInterviewer: [],
    comment: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          candidateName,
          candidateAge: candidateAge ?? null,
          candidateId,
          candidateLocation,
          interViewDate,
          interviewer,
          Location,
          interviewerJobLocation: interviewerJobLocation ?? null,
          ResponsibilitiesAndRoles: ResponsibilitiesAndRoles ?? null,
          TypeOfRoleSuitableFor: TypeOfRoleSuitableFor ?? null,
          typeOfContractSuggested: typeOfContractSuggested ?? null,
          DriveToWorkOrIntentToWork: DriveToWorkOrIntentToWork ?? null,
          ImmediateCareerAmbitions: ImmediateCareerAmbitions ?? null,
          financialDriveToWork: financialDriveToWork ?? null,
          learningReadiness: learningReadiness ?? null,
          JobSearchAndReadiness: JobSearchAndReadiness ?? null,
          JobSearchSuccessForShortTermJobs:
            JobSearchSuccessForShortTermJobs ?? null,
          lastWorked: lastWorked ?? null,
          maritalStatus: maritalStatus ?? null,
          Single: Single ?? null,
          AgeOfYoungestKid: AgeOfYoungestKid ?? null,
          SupportFromSpouseForKids: SupportFromSpouseForKids ?? null,
          SupportFromSpouseForHouseholdChores:
            SupportFromSpouseForHouseholdChores ?? null,
          SupportFromHelpersForKids: SupportFromHelpersForKids ?? null,
          SupportFromHelpersForHouseholdChores:
            SupportFromHelpersForHouseholdChores ?? null,
          SupportFromOtherFamilyMembersForKids:
            SupportFromOtherFamilyMembersForKids ?? null,
          SupportFromOtherFamilyMembersForHouseholdChores:
            SupportFromOtherFamilyMembersForHouseholdChores ?? null,
          careGivingResponsibilities: careGivingResponsibilities ?? null,
          extentOfCareGiving: extentOfCareGiving ?? null,
          SupportFromHelpersForCareGivingChores:
            SupportFromHelpersForCareGivingChores ?? null,
          WillingnessToExpandHelpSystem: WillingnessToExpandHelpSystem ?? null,
          OtherCommitments: OtherCommitments ?? null,
          AvailabilityOfHoursIdentifiedByInterviewer:
            AvailabilityOfHoursIdentifiedByInterviewer ?? null,
          comment: comment ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateQuestion.replaceAll("__typename", ""),
            variables: {
              input: {
                id: questionRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "QuestionUpdateForm")}
      {...rest}
    >
      <TextField
        label="Candidate name"
        isRequired={true}
        isReadOnly={false}
        value={candidateName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName: value,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.candidateName ?? value;
          }
          if (errors.candidateName?.hasError) {
            runValidationTasks("candidateName", value);
          }
          setCandidateName(value);
        }}
        onBlur={() => runValidationTasks("candidateName", candidateName)}
        errorMessage={errors.candidateName?.errorMessage}
        hasError={errors.candidateName?.hasError}
        {...getOverrideProps(overrides, "candidateName")}
      ></TextField>
      <SelectField
        label="Candidate age"
        placeholder="Please select an option"
        isDisabled={false}
        value={candidateAge}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge: value,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.candidateAge ?? value;
          }
          if (errors.candidateAge?.hasError) {
            runValidationTasks("candidateAge", value);
          }
          setCandidateAge(value);
        }}
        onBlur={() => runValidationTasks("candidateAge", candidateAge)}
        errorMessage={errors.candidateAge?.errorMessage}
        hasError={errors.candidateAge?.hasError}
        {...getOverrideProps(overrides, "candidateAge")}
      >
        <option
          children="Years 21 to 25"
          value="Years_21_to_25"
          {...getOverrideProps(overrides, "candidateAgeoption0")}
        ></option>
        <option
          children="Years 25 to 30"
          value="Years_25_to_30"
          {...getOverrideProps(overrides, "candidateAgeoption1")}
        ></option>
        <option
          children="Years 30 to 40"
          value="Years_30_to_40"
          {...getOverrideProps(overrides, "candidateAgeoption2")}
        ></option>
        <option
          children="Years 40 and above"
          value="Years_40_and_above"
          {...getOverrideProps(overrides, "candidateAgeoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Candidate id"
        isRequired={true}
        isReadOnly={false}
        value={candidateId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId: value,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.candidateId ?? value;
          }
          if (errors.candidateId?.hasError) {
            runValidationTasks("candidateId", value);
          }
          setCandidateId(value);
        }}
        onBlur={() => runValidationTasks("candidateId", candidateId)}
        errorMessage={errors.candidateId?.errorMessage}
        hasError={errors.candidateId?.hasError}
        {...getOverrideProps(overrides, "candidateId")}
      ></TextField>
      <TextField
        label="Candidate location"
        isRequired={true}
        isReadOnly={false}
        value={candidateLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation: value,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.candidateLocation ?? value;
          }
          if (errors.candidateLocation?.hasError) {
            runValidationTasks("candidateLocation", value);
          }
          setCandidateLocation(value);
        }}
        onBlur={() =>
          runValidationTasks("candidateLocation", candidateLocation)
        }
        errorMessage={errors.candidateLocation?.errorMessage}
        hasError={errors.candidateLocation?.hasError}
        {...getOverrideProps(overrides, "candidateLocation")}
      ></TextField>
      <TextField
        label="Inter view date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={interViewDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate: value,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.interViewDate ?? value;
          }
          if (errors.interViewDate?.hasError) {
            runValidationTasks("interViewDate", value);
          }
          setInterViewDate(value);
        }}
        onBlur={() => runValidationTasks("interViewDate", interViewDate)}
        errorMessage={errors.interViewDate?.errorMessage}
        hasError={errors.interViewDate?.hasError}
        {...getOverrideProps(overrides, "interViewDate")}
      ></TextField>
      <TextField
        label="Interviewer"
        isRequired={true}
        isReadOnly={false}
        value={interviewer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer: value,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.interviewer ?? value;
          }
          if (errors.interviewer?.hasError) {
            runValidationTasks("interviewer", value);
          }
          setInterviewer(value);
        }}
        onBlur={() => runValidationTasks("interviewer", interviewer)}
        errorMessage={errors.interviewer?.errorMessage}
        hasError={errors.interviewer?.hasError}
        {...getOverrideProps(overrides, "interviewer")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={true}
        isReadOnly={false}
        value={Location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location: value,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.Location ?? value;
          }
          if (errors.Location?.hasError) {
            runValidationTasks("Location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("Location", Location)}
        errorMessage={errors.Location?.errorMessage}
        hasError={errors.Location?.hasError}
        {...getOverrideProps(overrides, "Location")}
      ></TextField>
      <TextField
        label="Interviewer job location"
        isRequired={false}
        isReadOnly={false}
        value={interviewerJobLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation: value,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.interviewerJobLocation ?? value;
          }
          if (errors.interviewerJobLocation?.hasError) {
            runValidationTasks("interviewerJobLocation", value);
          }
          setInterviewerJobLocation(value);
        }}
        onBlur={() =>
          runValidationTasks("interviewerJobLocation", interviewerJobLocation)
        }
        errorMessage={errors.interviewerJobLocation?.errorMessage}
        hasError={errors.interviewerJobLocation?.hasError}
        {...getOverrideProps(overrides, "interviewerJobLocation")}
      ></TextField>
      <SelectField
        label="Responsibilities and roles"
        placeholder="Please select an option"
        isDisabled={false}
        value={ResponsibilitiesAndRoles}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles: value,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.ResponsibilitiesAndRoles ?? value;
          }
          if (errors.ResponsibilitiesAndRoles?.hasError) {
            runValidationTasks("ResponsibilitiesAndRoles", value);
          }
          setResponsibilitiesAndRoles(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ResponsibilitiesAndRoles",
            ResponsibilitiesAndRoles
          )
        }
        errorMessage={errors.ResponsibilitiesAndRoles?.errorMessage}
        hasError={errors.ResponsibilitiesAndRoles?.hasError}
        {...getOverrideProps(overrides, "ResponsibilitiesAndRoles")}
      >
        <option
          children="Team member"
          value="Team_Member"
          {...getOverrideProps(overrides, "ResponsibilitiesAndRolesoption0")}
        ></option>
        <option
          children="Team manager"
          value="Team_Manager"
          {...getOverrideProps(overrides, "ResponsibilitiesAndRolesoption1")}
        ></option>
        <option
          children="Individual contributor"
          value="Individual_Contributor"
          {...getOverrideProps(overrides, "ResponsibilitiesAndRolesoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Type of role suitable for"
        placeholder="Please select an option"
        isDisabled={false}
        value={TypeOfRoleSuitableFor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor: value,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.TypeOfRoleSuitableFor ?? value;
          }
          if (errors.TypeOfRoleSuitableFor?.hasError) {
            runValidationTasks("TypeOfRoleSuitableFor", value);
          }
          setTypeOfRoleSuitableFor(value);
        }}
        onBlur={() =>
          runValidationTasks("TypeOfRoleSuitableFor", TypeOfRoleSuitableFor)
        }
        errorMessage={errors.TypeOfRoleSuitableFor?.errorMessage}
        hasError={errors.TypeOfRoleSuitableFor?.hasError}
        {...getOverrideProps(overrides, "TypeOfRoleSuitableFor")}
      >
        <option
          children="Short term"
          value="short_term"
          {...getOverrideProps(overrides, "TypeOfRoleSuitableForoption0")}
        ></option>
        <option
          children="Long term"
          value="long_term"
          {...getOverrideProps(overrides, "TypeOfRoleSuitableForoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Type of contract suggested"
        placeholder="Please select an option"
        isDisabled={false}
        value={typeOfContractSuggested}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested: value,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.typeOfContractSuggested ?? value;
          }
          if (errors.typeOfContractSuggested?.hasError) {
            runValidationTasks("typeOfContractSuggested", value);
          }
          setTypeOfContractSuggested(value);
        }}
        onBlur={() =>
          runValidationTasks("typeOfContractSuggested", typeOfContractSuggested)
        }
        errorMessage={errors.typeOfContractSuggested?.errorMessage}
        hasError={errors.typeOfContractSuggested?.hasError}
        {...getOverrideProps(overrides, "typeOfContractSuggested")}
      >
        <option
          children="Short term"
          value="short_term"
          {...getOverrideProps(overrides, "typeOfContractSuggestedoption0")}
        ></option>
        <option
          children="Long term"
          value="long_term"
          {...getOverrideProps(overrides, "typeOfContractSuggestedoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Drive to work or intent to work"
        placeholder="Please select an option"
        isDisabled={false}
        value={DriveToWorkOrIntentToWork}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork: value,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.DriveToWorkOrIntentToWork ?? value;
          }
          if (errors.DriveToWorkOrIntentToWork?.hasError) {
            runValidationTasks("DriveToWorkOrIntentToWork", value);
          }
          setDriveToWorkOrIntentToWork(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "DriveToWorkOrIntentToWork",
            DriveToWorkOrIntentToWork
          )
        }
        errorMessage={errors.DriveToWorkOrIntentToWork?.errorMessage}
        hasError={errors.DriveToWorkOrIntentToWork?.hasError}
        {...getOverrideProps(overrides, "DriveToWorkOrIntentToWork")}
      >
        <option
          children="Very high"
          value="very_high"
          {...getOverrideProps(overrides, "DriveToWorkOrIntentToWorkoption0")}
        ></option>
        <option
          children="High"
          value="high"
          {...getOverrideProps(overrides, "DriveToWorkOrIntentToWorkoption1")}
        ></option>
        <option
          children="Low"
          value="low"
          {...getOverrideProps(overrides, "DriveToWorkOrIntentToWorkoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Immediate career ambitions"
        placeholder="Please select an option"
        isDisabled={false}
        value={ImmediateCareerAmbitions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions: value,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.ImmediateCareerAmbitions ?? value;
          }
          if (errors.ImmediateCareerAmbitions?.hasError) {
            runValidationTasks("ImmediateCareerAmbitions", value);
          }
          setImmediateCareerAmbitions(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ImmediateCareerAmbitions",
            ImmediateCareerAmbitions
          )
        }
        errorMessage={errors.ImmediateCareerAmbitions?.errorMessage}
        hasError={errors.ImmediateCareerAmbitions?.hasError}
        {...getOverrideProps(overrides, "ImmediateCareerAmbitions")}
      >
        <option
          children="Wfh flexibility"
          value="WFH_Flexibility"
          {...getOverrideProps(overrides, "ImmediateCareerAmbitionsoption0")}
        ></option>
        <option
          children="Long term job"
          value="Long_term_job"
          {...getOverrideProps(overrides, "ImmediateCareerAmbitionsoption1")}
        ></option>
        <option
          children="Utilize free time"
          value="Utilize_free_Time"
          {...getOverrideProps(overrides, "ImmediateCareerAmbitionsoption2")}
        ></option>
        <option
          children="Restart work after break"
          value="Restart_work_after_break"
          {...getOverrideProps(overrides, "ImmediateCareerAmbitionsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Financial drive to work"
        placeholder="Please select an option"
        isDisabled={false}
        value={financialDriveToWork}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork: value,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.financialDriveToWork ?? value;
          }
          if (errors.financialDriveToWork?.hasError) {
            runValidationTasks("financialDriveToWork", value);
          }
          setFinancialDriveToWork(value);
        }}
        onBlur={() =>
          runValidationTasks("financialDriveToWork", financialDriveToWork)
        }
        errorMessage={errors.financialDriveToWork?.errorMessage}
        hasError={errors.financialDriveToWork?.hasError}
        {...getOverrideProps(overrides, "financialDriveToWork")}
      >
        <option
          children="Spend on self"
          value="spend_on_self"
          {...getOverrideProps(overrides, "financialDriveToWorkoption0")}
        ></option>
        <option
          children="Contribute household minor"
          value="Contribute_household_minor"
          {...getOverrideProps(overrides, "financialDriveToWorkoption1")}
        ></option>
        <option
          children="Contribute household major"
          value="Contribute_household_major"
          {...getOverrideProps(overrides, "financialDriveToWorkoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Learning readiness"
        placeholder="Please select an option"
        isDisabled={false}
        value={learningReadiness}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness: value,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.learningReadiness ?? value;
          }
          if (errors.learningReadiness?.hasError) {
            runValidationTasks("learningReadiness", value);
          }
          setLearningReadiness(value);
        }}
        onBlur={() =>
          runValidationTasks("learningReadiness", learningReadiness)
        }
        errorMessage={errors.learningReadiness?.errorMessage}
        hasError={errors.learningReadiness?.hasError}
        {...getOverrideProps(overrides, "learningReadiness")}
      >
        <option
          children="Learning is essential"
          value="learning_is_essential"
          {...getOverrideProps(overrides, "learningReadinessoption0")}
        ></option>
        <option
          children="Satisfaction work"
          value="satisfaction_work"
          {...getOverrideProps(overrides, "learningReadinessoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Job search and readiness"
        placeholder="Please select an option"
        isDisabled={false}
        value={JobSearchAndReadiness}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness: value,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.JobSearchAndReadiness ?? value;
          }
          if (errors.JobSearchAndReadiness?.hasError) {
            runValidationTasks("JobSearchAndReadiness", value);
          }
          setJobSearchAndReadiness(value);
        }}
        onBlur={() =>
          runValidationTasks("JobSearchAndReadiness", JobSearchAndReadiness)
        }
        errorMessage={errors.JobSearchAndReadiness?.errorMessage}
        hasError={errors.JobSearchAndReadiness?.hasError}
        {...getOverrideProps(overrides, "JobSearchAndReadiness")}
      >
        <option
          children="Looking very actively"
          value="Looking_Very_actively"
          {...getOverrideProps(overrides, "JobSearchAndReadinessoption0")}
        ></option>
        <option
          children="Moderately active"
          value="Moderately_active"
          {...getOverrideProps(overrides, "JobSearchAndReadinessoption1")}
        ></option>
        <option
          children="Job search inactive"
          value="Job_search_Inactive"
          {...getOverrideProps(overrides, "JobSearchAndReadinessoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Job search success for short term jobs"
        placeholder="Please select an option"
        isDisabled={false}
        value={JobSearchSuccessForShortTermJobs}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs: value,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.JobSearchSuccessForShortTermJobs ?? value;
          }
          if (errors.JobSearchSuccessForShortTermJobs?.hasError) {
            runValidationTasks("JobSearchSuccessForShortTermJobs", value);
          }
          setJobSearchSuccessForShortTermJobs(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "JobSearchSuccessForShortTermJobs",
            JobSearchSuccessForShortTermJobs
          )
        }
        errorMessage={errors.JobSearchSuccessForShortTermJobs?.errorMessage}
        hasError={errors.JobSearchSuccessForShortTermJobs?.hasError}
        {...getOverrideProps(overrides, "JobSearchSuccessForShortTermJobs")}
      >
        <option
          children="Not many callback"
          value="Not_Many_callback"
          {...getOverrideProps(
            overrides,
            "JobSearchSuccessForShortTermJobsoption0"
          )}
        ></option>
        <option
          children="Received callback"
          value="Received_callback"
          {...getOverrideProps(
            overrides,
            "JobSearchSuccessForShortTermJobsoption1"
          )}
        ></option>
      </SelectField>
      <SelectField
        label="Last worked"
        placeholder="Please select an option"
        isDisabled={false}
        value={lastWorked}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked: value,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.lastWorked ?? value;
          }
          if (errors.lastWorked?.hasError) {
            runValidationTasks("lastWorked", value);
          }
          setLastWorked(value);
        }}
        onBlur={() => runValidationTasks("lastWorked", lastWorked)}
        errorMessage={errors.lastWorked?.errorMessage}
        hasError={errors.lastWorked?.hasError}
        {...getOverrideProps(overrides, "lastWorked")}
      >
        <option
          children="Yrs 0 to 2"
          value="Yrs_0__to_2"
          {...getOverrideProps(overrides, "lastWorkedoption0")}
        ></option>
        <option
          children="Yrs more than 5"
          value="Yrs_More__than_5"
          {...getOverrideProps(overrides, "lastWorkedoption1")}
        ></option>
        <option
          children="Yrs 2 to 5"
          value="Yrs_2_to_5"
          {...getOverrideProps(overrides, "lastWorkedoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Marital status"
        placeholder="Please select an option"
        isDisabled={false}
        value={maritalStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus: value,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.maritalStatus ?? value;
          }
          if (errors.maritalStatus?.hasError) {
            runValidationTasks("maritalStatus", value);
          }
          setMaritalStatus(value);
        }}
        onBlur={() => runValidationTasks("maritalStatus", maritalStatus)}
        errorMessage={errors.maritalStatus?.errorMessage}
        hasError={errors.maritalStatus?.hasError}
        {...getOverrideProps(overrides, "maritalStatus")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(overrides, "maritalStatusoption0")}
        ></option>
        <option
          children="Married"
          value="Married"
          {...getOverrideProps(overrides, "maritalStatusoption1")}
        ></option>
        <option
          children="Single"
          value="Single"
          {...getOverrideProps(overrides, "maritalStatusoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Single"
        placeholder="Please select an option"
        isDisabled={false}
        value={Single}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single: value,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.Single ?? value;
          }
          if (errors.Single?.hasError) {
            runValidationTasks("Single", value);
          }
          setSingle(value);
        }}
        onBlur={() => runValidationTasks("Single", Single)}
        errorMessage={errors.Single?.errorMessage}
        hasError={errors.Single?.hasError}
        {...getOverrideProps(overrides, "Single")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(overrides, "Singleoption0")}
        ></option>
        <option
          children="Un married"
          value="UnMarried"
          {...getOverrideProps(overrides, "Singleoption1")}
        ></option>
        <option
          children="Separated divorced"
          value="Separated_Divorced"
          {...getOverrideProps(overrides, "Singleoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Age of youngest kid"
        placeholder="Please select an option"
        isDisabled={false}
        value={AgeOfYoungestKid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid: value,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.AgeOfYoungestKid ?? value;
          }
          if (errors.AgeOfYoungestKid?.hasError) {
            runValidationTasks("AgeOfYoungestKid", value);
          }
          setAgeOfYoungestKid(value);
        }}
        onBlur={() => runValidationTasks("AgeOfYoungestKid", AgeOfYoungestKid)}
        errorMessage={errors.AgeOfYoungestKid?.errorMessage}
        hasError={errors.AgeOfYoungestKid?.hasError}
        {...getOverrideProps(overrides, "AgeOfYoungestKid")}
      >
        <option
          children="No kids"
          value="No_kids"
          {...getOverrideProps(overrides, "AgeOfYoungestKidoption0")}
        ></option>
        <option
          children="Yrs 0 to 5"
          value="Yrs_0_to_5"
          {...getOverrideProps(overrides, "AgeOfYoungestKidoption1")}
        ></option>
        <option
          children="Yrs 5 to 12"
          value="Yrs_5_to_12"
          {...getOverrideProps(overrides, "AgeOfYoungestKidoption2")}
        ></option>
        <option
          children="Yrs 12 to 16"
          value="Yrs_12_to_16"
          {...getOverrideProps(overrides, "AgeOfYoungestKidoption3")}
        ></option>
        <option
          children="Yrs 16 to plus"
          value="Yrs_16_to_plus"
          {...getOverrideProps(overrides, "AgeOfYoungestKidoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Support from spouse for kids"
        placeholder="Please select an option"
        isDisabled={false}
        value={SupportFromSpouseForKids}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids: value,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.SupportFromSpouseForKids ?? value;
          }
          if (errors.SupportFromSpouseForKids?.hasError) {
            runValidationTasks("SupportFromSpouseForKids", value);
          }
          setSupportFromSpouseForKids(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "SupportFromSpouseForKids",
            SupportFromSpouseForKids
          )
        }
        errorMessage={errors.SupportFromSpouseForKids?.errorMessage}
        hasError={errors.SupportFromSpouseForKids?.hasError}
        {...getOverrideProps(overrides, "SupportFromSpouseForKids")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(overrides, "SupportFromSpouseForKidsoption0")}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(overrides, "SupportFromSpouseForKidsoption1")}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(overrides, "SupportFromSpouseForKidsoption2")}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(overrides, "SupportFromSpouseForKidsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Support from spouse for household chores"
        placeholder="Please select an option"
        isDisabled={false}
        value={SupportFromSpouseForHouseholdChores}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores: value,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.SupportFromSpouseForHouseholdChores ?? value;
          }
          if (errors.SupportFromSpouseForHouseholdChores?.hasError) {
            runValidationTasks("SupportFromSpouseForHouseholdChores", value);
          }
          setSupportFromSpouseForHouseholdChores(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "SupportFromSpouseForHouseholdChores",
            SupportFromSpouseForHouseholdChores
          )
        }
        errorMessage={errors.SupportFromSpouseForHouseholdChores?.errorMessage}
        hasError={errors.SupportFromSpouseForHouseholdChores?.hasError}
        {...getOverrideProps(overrides, "SupportFromSpouseForHouseholdChores")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(
            overrides,
            "SupportFromSpouseForHouseholdChoresoption0"
          )}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(
            overrides,
            "SupportFromSpouseForHouseholdChoresoption1"
          )}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(
            overrides,
            "SupportFromSpouseForHouseholdChoresoption2"
          )}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(
            overrides,
            "SupportFromSpouseForHouseholdChoresoption3"
          )}
        ></option>
      </SelectField>
      <SelectField
        label="Support from helpers for kids"
        placeholder="Please select an option"
        isDisabled={false}
        value={SupportFromHelpersForKids}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids: value,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.SupportFromHelpersForKids ?? value;
          }
          if (errors.SupportFromHelpersForKids?.hasError) {
            runValidationTasks("SupportFromHelpersForKids", value);
          }
          setSupportFromHelpersForKids(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "SupportFromHelpersForKids",
            SupportFromHelpersForKids
          )
        }
        errorMessage={errors.SupportFromHelpersForKids?.errorMessage}
        hasError={errors.SupportFromHelpersForKids?.hasError}
        {...getOverrideProps(overrides, "SupportFromHelpersForKids")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(overrides, "SupportFromHelpersForKidsoption0")}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(overrides, "SupportFromHelpersForKidsoption1")}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(overrides, "SupportFromHelpersForKidsoption2")}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(overrides, "SupportFromHelpersForKidsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Support from helpers for household chores"
        placeholder="Please select an option"
        isDisabled={false}
        value={SupportFromHelpersForHouseholdChores}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores: value,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.SupportFromHelpersForHouseholdChores ?? value;
          }
          if (errors.SupportFromHelpersForHouseholdChores?.hasError) {
            runValidationTasks("SupportFromHelpersForHouseholdChores", value);
          }
          setSupportFromHelpersForHouseholdChores(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "SupportFromHelpersForHouseholdChores",
            SupportFromHelpersForHouseholdChores
          )
        }
        errorMessage={errors.SupportFromHelpersForHouseholdChores?.errorMessage}
        hasError={errors.SupportFromHelpersForHouseholdChores?.hasError}
        {...getOverrideProps(overrides, "SupportFromHelpersForHouseholdChores")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(
            overrides,
            "SupportFromHelpersForHouseholdChoresoption0"
          )}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(
            overrides,
            "SupportFromHelpersForHouseholdChoresoption1"
          )}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(
            overrides,
            "SupportFromHelpersForHouseholdChoresoption2"
          )}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(
            overrides,
            "SupportFromHelpersForHouseholdChoresoption3"
          )}
        ></option>
      </SelectField>
      <SelectField
        label="Support from other family members for kids"
        placeholder="Please select an option"
        isDisabled={false}
        value={SupportFromOtherFamilyMembersForKids}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids: value,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.SupportFromOtherFamilyMembersForKids ?? value;
          }
          if (errors.SupportFromOtherFamilyMembersForKids?.hasError) {
            runValidationTasks("SupportFromOtherFamilyMembersForKids", value);
          }
          setSupportFromOtherFamilyMembersForKids(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "SupportFromOtherFamilyMembersForKids",
            SupportFromOtherFamilyMembersForKids
          )
        }
        errorMessage={errors.SupportFromOtherFamilyMembersForKids?.errorMessage}
        hasError={errors.SupportFromOtherFamilyMembersForKids?.hasError}
        {...getOverrideProps(overrides, "SupportFromOtherFamilyMembersForKids")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(
            overrides,
            "SupportFromOtherFamilyMembersForKidsoption0"
          )}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(
            overrides,
            "SupportFromOtherFamilyMembersForKidsoption1"
          )}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(
            overrides,
            "SupportFromOtherFamilyMembersForKidsoption2"
          )}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(
            overrides,
            "SupportFromOtherFamilyMembersForKidsoption3"
          )}
        ></option>
      </SelectField>
      <SelectField
        label="Support from other family members for household chores"
        placeholder="Please select an option"
        isDisabled={false}
        value={SupportFromOtherFamilyMembersForHouseholdChores}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores: value,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value =
              result?.SupportFromOtherFamilyMembersForHouseholdChores ?? value;
          }
          if (
            errors.SupportFromOtherFamilyMembersForHouseholdChores?.hasError
          ) {
            runValidationTasks(
              "SupportFromOtherFamilyMembersForHouseholdChores",
              value
            );
          }
          setSupportFromOtherFamilyMembersForHouseholdChores(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "SupportFromOtherFamilyMembersForHouseholdChores",
            SupportFromOtherFamilyMembersForHouseholdChores
          )
        }
        errorMessage={
          errors.SupportFromOtherFamilyMembersForHouseholdChores?.errorMessage
        }
        hasError={
          errors.SupportFromOtherFamilyMembersForHouseholdChores?.hasError
        }
        {...getOverrideProps(
          overrides,
          "SupportFromOtherFamilyMembersForHouseholdChores"
        )}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(
            overrides,
            "SupportFromOtherFamilyMembersForHouseholdChoresoption0"
          )}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(
            overrides,
            "SupportFromOtherFamilyMembersForHouseholdChoresoption1"
          )}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(
            overrides,
            "SupportFromOtherFamilyMembersForHouseholdChoresoption2"
          )}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(
            overrides,
            "SupportFromOtherFamilyMembersForHouseholdChoresoption3"
          )}
        ></option>
      </SelectField>
      <SelectField
        label="Care giving responsibilities"
        placeholder="Please select an option"
        isDisabled={false}
        value={careGivingResponsibilities}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities: value,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.careGivingResponsibilities ?? value;
          }
          if (errors.careGivingResponsibilities?.hasError) {
            runValidationTasks("careGivingResponsibilities", value);
          }
          setCareGivingResponsibilities(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "careGivingResponsibilities",
            careGivingResponsibilities
          )
        }
        errorMessage={errors.careGivingResponsibilities?.errorMessage}
        hasError={errors.careGivingResponsibilities?.hasError}
        {...getOverrideProps(overrides, "careGivingResponsibilities")}
      >
        <option
          children="Yes"
          value="YES"
          {...getOverrideProps(overrides, "careGivingResponsibilitiesoption0")}
        ></option>
        <option
          children="No"
          value="No"
          {...getOverrideProps(overrides, "careGivingResponsibilitiesoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Extent of care giving"
        placeholder="Please select an option"
        isDisabled={false}
        value={extentOfCareGiving}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving: value,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.extentOfCareGiving ?? value;
          }
          if (errors.extentOfCareGiving?.hasError) {
            runValidationTasks("extentOfCareGiving", value);
          }
          setExtentOfCareGiving(value);
        }}
        onBlur={() =>
          runValidationTasks("extentOfCareGiving", extentOfCareGiving)
        }
        errorMessage={errors.extentOfCareGiving?.errorMessage}
        hasError={errors.extentOfCareGiving?.hasError}
        {...getOverrideProps(overrides, "extentOfCareGiving")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(overrides, "extentOfCareGivingoption0")}
        ></option>
        <option
          children="Monitoring is enough"
          value="Monitoring_is_enough"
          {...getOverrideProps(overrides, "extentOfCareGivingoption1")}
        ></option>
        <option
          children="Completely dependnet"
          value="Completely_dependnet"
          {...getOverrideProps(overrides, "extentOfCareGivingoption2")}
        ></option>
        <option
          children="Partial care"
          value="Partial_care"
          {...getOverrideProps(overrides, "extentOfCareGivingoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Support from helpers for care giving chores"
        placeholder="Please select an option"
        isDisabled={false}
        value={SupportFromHelpersForCareGivingChores}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores: value,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.SupportFromHelpersForCareGivingChores ?? value;
          }
          if (errors.SupportFromHelpersForCareGivingChores?.hasError) {
            runValidationTasks("SupportFromHelpersForCareGivingChores", value);
          }
          setSupportFromHelpersForCareGivingChores(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "SupportFromHelpersForCareGivingChores",
            SupportFromHelpersForCareGivingChores
          )
        }
        errorMessage={
          errors.SupportFromHelpersForCareGivingChores?.errorMessage
        }
        hasError={errors.SupportFromHelpersForCareGivingChores?.hasError}
        {...getOverrideProps(
          overrides,
          "SupportFromHelpersForCareGivingChores"
        )}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(
            overrides,
            "SupportFromHelpersForCareGivingChoresoption0"
          )}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(
            overrides,
            "SupportFromHelpersForCareGivingChoresoption1"
          )}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(
            overrides,
            "SupportFromHelpersForCareGivingChoresoption2"
          )}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(
            overrides,
            "SupportFromHelpersForCareGivingChoresoption3"
          )}
        ></option>
      </SelectField>
      <SelectField
        label="Willingness to expand help system"
        placeholder="Please select an option"
        isDisabled={false}
        value={WillingnessToExpandHelpSystem}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem: value,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.WillingnessToExpandHelpSystem ?? value;
          }
          if (errors.WillingnessToExpandHelpSystem?.hasError) {
            runValidationTasks("WillingnessToExpandHelpSystem", value);
          }
          setWillingnessToExpandHelpSystem(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "WillingnessToExpandHelpSystem",
            WillingnessToExpandHelpSystem
          )
        }
        errorMessage={errors.WillingnessToExpandHelpSystem?.errorMessage}
        hasError={errors.WillingnessToExpandHelpSystem?.hasError}
        {...getOverrideProps(overrides, "WillingnessToExpandHelpSystem")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(
            overrides,
            "WillingnessToExpandHelpSystemoption0"
          )}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(
            overrides,
            "WillingnessToExpandHelpSystemoption1"
          )}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(
            overrides,
            "WillingnessToExpandHelpSystemoption2"
          )}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(
            overrides,
            "WillingnessToExpandHelpSystemoption3"
          )}
        ></option>
      </SelectField>
      <SelectField
        label="Other commitments"
        placeholder="Please select an option"
        isDisabled={false}
        value={OtherCommitments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments: value,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.OtherCommitments ?? value;
          }
          if (errors.OtherCommitments?.hasError) {
            runValidationTasks("OtherCommitments", value);
          }
          setOtherCommitments(value);
        }}
        onBlur={() => runValidationTasks("OtherCommitments", OtherCommitments)}
        errorMessage={errors.OtherCommitments?.errorMessage}
        hasError={errors.OtherCommitments?.hasError}
        {...getOverrideProps(overrides, "OtherCommitments")}
      >
        <option
          children="None few"
          value="None_Few"
          {...getOverrideProps(overrides, "OtherCommitmentsoption0")}
        ></option>
        <option
          children="Many"
          value="Many"
          {...getOverrideProps(overrides, "OtherCommitmentsoption1")}
        ></option>
        <option
          children="Moderate manageable"
          value="Moderate_Manageable"
          {...getOverrideProps(overrides, "OtherCommitmentsoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Availability of hours identified by interviewer"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={AvailabilityOfHoursIdentifiedByInterviewer}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer: value,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.AvailabilityOfHoursIdentifiedByInterviewer ?? value;
          }
          if (errors.AvailabilityOfHoursIdentifiedByInterviewer?.hasError) {
            runValidationTasks(
              "AvailabilityOfHoursIdentifiedByInterviewer",
              value
            );
          }
          setAvailabilityOfHoursIdentifiedByInterviewer(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "AvailabilityOfHoursIdentifiedByInterviewer",
            AvailabilityOfHoursIdentifiedByInterviewer
          )
        }
        errorMessage={
          errors.AvailabilityOfHoursIdentifiedByInterviewer?.errorMessage
        }
        hasError={errors.AvailabilityOfHoursIdentifiedByInterviewer?.hasError}
        {...getOverrideProps(
          overrides,
          "AvailabilityOfHoursIdentifiedByInterviewer"
        )}
      ></TextField>
      <TextField
        label="Comment"
        isRequired={false}
        isReadOnly={false}
        value={comment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateAge,
              candidateId,
              candidateLocation,
              interViewDate,
              interviewer,
              Location,
              interviewerJobLocation,
              ResponsibilitiesAndRoles,
              TypeOfRoleSuitableFor,
              typeOfContractSuggested,
              DriveToWorkOrIntentToWork,
              ImmediateCareerAmbitions,
              financialDriveToWork,
              learningReadiness,
              JobSearchAndReadiness,
              JobSearchSuccessForShortTermJobs,
              lastWorked,
              maritalStatus,
              Single,
              AgeOfYoungestKid,
              SupportFromSpouseForKids,
              SupportFromSpouseForHouseholdChores,
              SupportFromHelpersForKids,
              SupportFromHelpersForHouseholdChores,
              SupportFromOtherFamilyMembersForKids,
              SupportFromOtherFamilyMembersForHouseholdChores,
              careGivingResponsibilities,
              extentOfCareGiving,
              SupportFromHelpersForCareGivingChores,
              WillingnessToExpandHelpSystem,
              OtherCommitments,
              AvailabilityOfHoursIdentifiedByInterviewer,
              comment: value,
            };
            const result = onChange(modelFields);
            value = result?.comment ?? value;
          }
          if (errors.comment?.hasError) {
            runValidationTasks("comment", value);
          }
          setComment(value);
        }}
        onBlur={() => runValidationTasks("comment", comment)}
        errorMessage={errors.comment?.errorMessage}
        hasError={errors.comment?.hasError}
        {...getOverrideProps(overrides, "comment")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || questionModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || questionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
