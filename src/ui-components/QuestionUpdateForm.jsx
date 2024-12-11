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
    candidateId: "",
    candidateLocation: "",
    interviewer: "",
    interviewDate: "",
    jobLocation: "",
    roles: "",
    interviewerJobLocation: "",
    typeOfContract: "",
    driveToWork: "",
    careerAmbition: "",
    financialDrive: "",
    learningReadiness: "",
    jobSearch: "",
    jobSuccess: "",
    lastWorked: "",
    maritalStatus: "",
    singleType: "",
    kidsAge: "",
    spouseSupportKids: "",
    helperSupportKids: "",
    familySupportKids: "",
    spouseSupportHousehold: "",
    helperSupportHousehold: "",
    familySupportHousehold: "",
    careGiving: "",
    extentOfCareGiving: "",
    helperSupportCareGiving: "",
    readyToExtendSupport: "",
    OtherCommitments: "",
    comment: "",
  };
  const [candidateName, setCandidateName] = React.useState(
    initialValues.candidateName
  );
  const [candidateId, setCandidateId] = React.useState(
    initialValues.candidateId
  );
  const [candidateLocation, setCandidateLocation] = React.useState(
    initialValues.candidateLocation
  );
  const [interviewer, setInterviewer] = React.useState(
    initialValues.interviewer
  );
  const [interviewDate, setInterviewDate] = React.useState(
    initialValues.interviewDate
  );
  const [jobLocation, setJobLocation] = React.useState(
    initialValues.jobLocation
  );
  const [roles, setRoles] = React.useState(initialValues.roles);
  const [interviewerJobLocation, setInterviewerJobLocation] = React.useState(
    initialValues.interviewerJobLocation
  );
  const [typeOfContract, setTypeOfContract] = React.useState(
    initialValues.typeOfContract
  );
  const [driveToWork, setDriveToWork] = React.useState(
    initialValues.driveToWork
  );
  const [careerAmbition, setCareerAmbition] = React.useState(
    initialValues.careerAmbition
  );
  const [financialDrive, setFinancialDrive] = React.useState(
    initialValues.financialDrive
  );
  const [learningReadiness, setLearningReadiness] = React.useState(
    initialValues.learningReadiness
  );
  const [jobSearch, setJobSearch] = React.useState(initialValues.jobSearch);
  const [jobSuccess, setJobSuccess] = React.useState(initialValues.jobSuccess);
  const [lastWorked, setLastWorked] = React.useState(initialValues.lastWorked);
  const [maritalStatus, setMaritalStatus] = React.useState(
    initialValues.maritalStatus
  );
  const [singleType, setSingleType] = React.useState(initialValues.singleType);
  const [kidsAge, setKidsAge] = React.useState(initialValues.kidsAge);
  const [spouseSupportKids, setSpouseSupportKids] = React.useState(
    initialValues.spouseSupportKids
  );
  const [helperSupportKids, setHelperSupportKids] = React.useState(
    initialValues.helperSupportKids
  );
  const [familySupportKids, setFamilySupportKids] = React.useState(
    initialValues.familySupportKids
  );
  const [spouseSupportHousehold, setSpouseSupportHousehold] = React.useState(
    initialValues.spouseSupportHousehold
  );
  const [helperSupportHousehold, setHelperSupportHousehold] = React.useState(
    initialValues.helperSupportHousehold
  );
  const [familySupportHousehold, setFamilySupportHousehold] = React.useState(
    initialValues.familySupportHousehold
  );
  const [careGiving, setCareGiving] = React.useState(initialValues.careGiving);
  const [extentOfCareGiving, setExtentOfCareGiving] = React.useState(
    initialValues.extentOfCareGiving
  );
  const [helperSupportCareGiving, setHelperSupportCareGiving] = React.useState(
    initialValues.helperSupportCareGiving
  );
  const [readyToExtendSupport, setReadyToExtendSupport] = React.useState(
    initialValues.readyToExtendSupport
  );
  const [OtherCommitments, setOtherCommitments] = React.useState(
    initialValues.OtherCommitments
  );
  const [comment, setComment] = React.useState(initialValues.comment);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = questionRecord
      ? { ...initialValues, ...questionRecord }
      : initialValues;
    setCandidateName(cleanValues.candidateName);
    setCandidateId(cleanValues.candidateId);
    setCandidateLocation(cleanValues.candidateLocation);
    setInterviewer(cleanValues.interviewer);
    setInterviewDate(cleanValues.interviewDate);
    setJobLocation(cleanValues.jobLocation);
    setRoles(cleanValues.roles);
    setInterviewerJobLocation(cleanValues.interviewerJobLocation);
    setTypeOfContract(cleanValues.typeOfContract);
    setDriveToWork(cleanValues.driveToWork);
    setCareerAmbition(cleanValues.careerAmbition);
    setFinancialDrive(cleanValues.financialDrive);
    setLearningReadiness(cleanValues.learningReadiness);
    setJobSearch(cleanValues.jobSearch);
    setJobSuccess(cleanValues.jobSuccess);
    setLastWorked(cleanValues.lastWorked);
    setMaritalStatus(cleanValues.maritalStatus);
    setSingleType(cleanValues.singleType);
    setKidsAge(cleanValues.kidsAge);
    setSpouseSupportKids(cleanValues.spouseSupportKids);
    setHelperSupportKids(cleanValues.helperSupportKids);
    setFamilySupportKids(cleanValues.familySupportKids);
    setSpouseSupportHousehold(cleanValues.spouseSupportHousehold);
    setHelperSupportHousehold(cleanValues.helperSupportHousehold);
    setFamilySupportHousehold(cleanValues.familySupportHousehold);
    setCareGiving(cleanValues.careGiving);
    setExtentOfCareGiving(cleanValues.extentOfCareGiving);
    setHelperSupportCareGiving(cleanValues.helperSupportCareGiving);
    setReadyToExtendSupport(cleanValues.readyToExtendSupport);
    setOtherCommitments(cleanValues.OtherCommitments);
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
    candidateId: [{ type: "Required" }],
    candidateLocation: [{ type: "Required" }],
    interviewer: [{ type: "Required" }],
    interviewDate: [{ type: "Required" }],
    jobLocation: [{ type: "Required" }],
    roles: [],
    interviewerJobLocation: [],
    typeOfContract: [],
    driveToWork: [],
    careerAmbition: [],
    financialDrive: [],
    learningReadiness: [],
    jobSearch: [],
    jobSuccess: [],
    lastWorked: [],
    maritalStatus: [],
    singleType: [],
    kidsAge: [],
    spouseSupportKids: [],
    helperSupportKids: [],
    familySupportKids: [],
    spouseSupportHousehold: [],
    helperSupportHousehold: [],
    familySupportHousehold: [],
    careGiving: [],
    extentOfCareGiving: [],
    helperSupportCareGiving: [],
    readyToExtendSupport: [],
    OtherCommitments: [],
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
          candidateId,
          candidateLocation,
          interviewer,
          interviewDate,
          jobLocation,
          roles: roles ?? null,
          interviewerJobLocation: interviewerJobLocation ?? null,
          typeOfContract: typeOfContract ?? null,
          driveToWork: driveToWork ?? null,
          careerAmbition: careerAmbition ?? null,
          financialDrive: financialDrive ?? null,
          learningReadiness: learningReadiness ?? null,
          jobSearch: jobSearch ?? null,
          jobSuccess: jobSuccess ?? null,
          lastWorked: lastWorked ?? null,
          maritalStatus: maritalStatus ?? null,
          singleType: singleType ?? null,
          kidsAge: kidsAge ?? null,
          spouseSupportKids: spouseSupportKids ?? null,
          helperSupportKids: helperSupportKids ?? null,
          familySupportKids: familySupportKids ?? null,
          spouseSupportHousehold: spouseSupportHousehold ?? null,
          helperSupportHousehold: helperSupportHousehold ?? null,
          familySupportHousehold: familySupportHousehold ?? null,
          careGiving: careGiving ?? null,
          extentOfCareGiving: extentOfCareGiving ?? null,
          helperSupportCareGiving: helperSupportCareGiving ?? null,
          readyToExtendSupport: readyToExtendSupport ?? null,
          OtherCommitments: OtherCommitments ?? null,
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
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
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
              candidateId: value,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
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
              candidateId,
              candidateLocation: value,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
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
        label="Interviewer"
        isRequired={true}
        isReadOnly={false}
        value={interviewer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer: value,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
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
        label="Interview date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={interviewDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate: value,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.interviewDate ?? value;
          }
          if (errors.interviewDate?.hasError) {
            runValidationTasks("interviewDate", value);
          }
          setInterviewDate(value);
        }}
        onBlur={() => runValidationTasks("interviewDate", interviewDate)}
        errorMessage={errors.interviewDate?.errorMessage}
        hasError={errors.interviewDate?.hasError}
        {...getOverrideProps(overrides, "interviewDate")}
      ></TextField>
      <TextField
        label="Job location"
        isRequired={true}
        isReadOnly={false}
        value={jobLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation: value,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.jobLocation ?? value;
          }
          if (errors.jobLocation?.hasError) {
            runValidationTasks("jobLocation", value);
          }
          setJobLocation(value);
        }}
        onBlur={() => runValidationTasks("jobLocation", jobLocation)}
        errorMessage={errors.jobLocation?.errorMessage}
        hasError={errors.jobLocation?.hasError}
        {...getOverrideProps(overrides, "jobLocation")}
      ></TextField>
      <SelectField
        label="Roles"
        placeholder="Please select an option"
        isDisabled={false}
        value={roles}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles: value,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.roles ?? value;
          }
          if (errors.roles?.hasError) {
            runValidationTasks("roles", value);
          }
          setRoles(value);
        }}
        onBlur={() => runValidationTasks("roles", roles)}
        errorMessage={errors.roles?.errorMessage}
        hasError={errors.roles?.hasError}
        {...getOverrideProps(overrides, "roles")}
      >
        <option
          children="Team member"
          value="Team_Member"
          {...getOverrideProps(overrides, "rolesoption0")}
        ></option>
        <option
          children="Team manager"
          value="Team_Manager"
          {...getOverrideProps(overrides, "rolesoption1")}
        ></option>
        <option
          children="Individual contributor"
          value="Individual_Contributor"
          {...getOverrideProps(overrides, "rolesoption2")}
        ></option>
      </SelectField>
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
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation: value,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
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
        label="Type of contract"
        placeholder="Please select an option"
        isDisabled={false}
        value={typeOfContract}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract: value,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.typeOfContract ?? value;
          }
          if (errors.typeOfContract?.hasError) {
            runValidationTasks("typeOfContract", value);
          }
          setTypeOfContract(value);
        }}
        onBlur={() => runValidationTasks("typeOfContract", typeOfContract)}
        errorMessage={errors.typeOfContract?.errorMessage}
        hasError={errors.typeOfContract?.hasError}
        {...getOverrideProps(overrides, "typeOfContract")}
      >
        <option
          children="Short term"
          value="short_term"
          {...getOverrideProps(overrides, "typeOfContractoption0")}
        ></option>
        <option
          children="Long term"
          value="long_term"
          {...getOverrideProps(overrides, "typeOfContractoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Drive to work"
        placeholder="Please select an option"
        isDisabled={false}
        value={driveToWork}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork: value,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.driveToWork ?? value;
          }
          if (errors.driveToWork?.hasError) {
            runValidationTasks("driveToWork", value);
          }
          setDriveToWork(value);
        }}
        onBlur={() => runValidationTasks("driveToWork", driveToWork)}
        errorMessage={errors.driveToWork?.errorMessage}
        hasError={errors.driveToWork?.hasError}
        {...getOverrideProps(overrides, "driveToWork")}
      >
        <option
          children="Very high"
          value="very_high"
          {...getOverrideProps(overrides, "driveToWorkoption0")}
        ></option>
        <option
          children="High"
          value="high"
          {...getOverrideProps(overrides, "driveToWorkoption1")}
        ></option>
        <option
          children="Low"
          value="low"
          {...getOverrideProps(overrides, "driveToWorkoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Career ambition"
        placeholder="Please select an option"
        isDisabled={false}
        value={careerAmbition}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition: value,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.careerAmbition ?? value;
          }
          if (errors.careerAmbition?.hasError) {
            runValidationTasks("careerAmbition", value);
          }
          setCareerAmbition(value);
        }}
        onBlur={() => runValidationTasks("careerAmbition", careerAmbition)}
        errorMessage={errors.careerAmbition?.errorMessage}
        hasError={errors.careerAmbition?.hasError}
        {...getOverrideProps(overrides, "careerAmbition")}
      >
        <option
          children="Wfh flexibility"
          value="WFH_Flexibility"
          {...getOverrideProps(overrides, "careerAmbitionoption0")}
        ></option>
        <option
          children="Long term job"
          value="Long_term_job"
          {...getOverrideProps(overrides, "careerAmbitionoption1")}
        ></option>
        <option
          children="Utilize free time"
          value="Utilize_free_Time"
          {...getOverrideProps(overrides, "careerAmbitionoption2")}
        ></option>
        <option
          children="Restart work after break"
          value="Restart_work_after_break"
          {...getOverrideProps(overrides, "careerAmbitionoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Financial drive"
        placeholder="Please select an option"
        isDisabled={false}
        value={financialDrive}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive: value,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.financialDrive ?? value;
          }
          if (errors.financialDrive?.hasError) {
            runValidationTasks("financialDrive", value);
          }
          setFinancialDrive(value);
        }}
        onBlur={() => runValidationTasks("financialDrive", financialDrive)}
        errorMessage={errors.financialDrive?.errorMessage}
        hasError={errors.financialDrive?.hasError}
        {...getOverrideProps(overrides, "financialDrive")}
      >
        <option
          children="Spend on self"
          value="spend_on_self"
          {...getOverrideProps(overrides, "financialDriveoption0")}
        ></option>
        <option
          children="Contribute household minor"
          value="Contribute_household_minor"
          {...getOverrideProps(overrides, "financialDriveoption1")}
        ></option>
        <option
          children="Contribute household major"
          value="Contribute_household_major"
          {...getOverrideProps(overrides, "financialDriveoption2")}
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
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness: value,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
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
        label="Job search"
        placeholder="Please select an option"
        isDisabled={false}
        value={jobSearch}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch: value,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.jobSearch ?? value;
          }
          if (errors.jobSearch?.hasError) {
            runValidationTasks("jobSearch", value);
          }
          setJobSearch(value);
        }}
        onBlur={() => runValidationTasks("jobSearch", jobSearch)}
        errorMessage={errors.jobSearch?.errorMessage}
        hasError={errors.jobSearch?.hasError}
        {...getOverrideProps(overrides, "jobSearch")}
      >
        <option
          children="Looking very actively"
          value="Looking_Very_actively"
          {...getOverrideProps(overrides, "jobSearchoption0")}
        ></option>
        <option
          children="Moderately active"
          value="Moderately_active"
          {...getOverrideProps(overrides, "jobSearchoption1")}
        ></option>
        <option
          children="Job search inactive"
          value="Job_search_Inactive"
          {...getOverrideProps(overrides, "jobSearchoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Job success"
        placeholder="Please select an option"
        isDisabled={false}
        value={jobSuccess}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess: value,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.jobSuccess ?? value;
          }
          if (errors.jobSuccess?.hasError) {
            runValidationTasks("jobSuccess", value);
          }
          setJobSuccess(value);
        }}
        onBlur={() => runValidationTasks("jobSuccess", jobSuccess)}
        errorMessage={errors.jobSuccess?.errorMessage}
        hasError={errors.jobSuccess?.hasError}
        {...getOverrideProps(overrides, "jobSuccess")}
      >
        <option
          children="Not many callback"
          value="Not_Many_callback"
          {...getOverrideProps(overrides, "jobSuccessoption0")}
        ></option>
        <option
          children="Received callback"
          value="Received_callback"
          {...getOverrideProps(overrides, "jobSuccessoption1")}
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
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked: value,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
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
          children="Yrs 0 2"
          value="Yrs_0_2"
          {...getOverrideProps(overrides, "lastWorkedoption0")}
        ></option>
        <option
          children="Yrs more 5"
          value="Yrs_More_5"
          {...getOverrideProps(overrides, "lastWorkedoption1")}
        ></option>
        <option
          children="Yrs 2 5"
          value="Yrs_2_5"
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
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus: value,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
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
        label="Single type"
        placeholder="Please select an option"
        isDisabled={false}
        value={singleType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType: value,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.singleType ?? value;
          }
          if (errors.singleType?.hasError) {
            runValidationTasks("singleType", value);
          }
          setSingleType(value);
        }}
        onBlur={() => runValidationTasks("singleType", singleType)}
        errorMessage={errors.singleType?.errorMessage}
        hasError={errors.singleType?.hasError}
        {...getOverrideProps(overrides, "singleType")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(overrides, "singleTypeoption0")}
        ></option>
        <option
          children="Un married"
          value="UnMarried"
          {...getOverrideProps(overrides, "singleTypeoption1")}
        ></option>
        <option
          children="Separated divorced"
          value="Separated_Divorced"
          {...getOverrideProps(overrides, "singleTypeoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Kids age"
        placeholder="Please select an option"
        isDisabled={false}
        value={kidsAge}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge: value,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.kidsAge ?? value;
          }
          if (errors.kidsAge?.hasError) {
            runValidationTasks("kidsAge", value);
          }
          setKidsAge(value);
        }}
        onBlur={() => runValidationTasks("kidsAge", kidsAge)}
        errorMessage={errors.kidsAge?.errorMessage}
        hasError={errors.kidsAge?.hasError}
        {...getOverrideProps(overrides, "kidsAge")}
      >
        <option
          children="No kids"
          value="No_kids"
          {...getOverrideProps(overrides, "kidsAgeoption0")}
        ></option>
        <option
          children="Yrs 0 5"
          value="Yrs_0_5"
          {...getOverrideProps(overrides, "kidsAgeoption1")}
        ></option>
        <option
          children="Yrs 5 12"
          value="Yrs_5_12"
          {...getOverrideProps(overrides, "kidsAgeoption2")}
        ></option>
        <option
          children="Yrs 12 16"
          value="Yrs_12_16"
          {...getOverrideProps(overrides, "kidsAgeoption3")}
        ></option>
        <option
          children="Yrs 16 plus"
          value="Yrs_16_plus"
          {...getOverrideProps(overrides, "kidsAgeoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Spouse support kids"
        placeholder="Please select an option"
        isDisabled={false}
        value={spouseSupportKids}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids: value,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.spouseSupportKids ?? value;
          }
          if (errors.spouseSupportKids?.hasError) {
            runValidationTasks("spouseSupportKids", value);
          }
          setSpouseSupportKids(value);
        }}
        onBlur={() =>
          runValidationTasks("spouseSupportKids", spouseSupportKids)
        }
        errorMessage={errors.spouseSupportKids?.errorMessage}
        hasError={errors.spouseSupportKids?.hasError}
        {...getOverrideProps(overrides, "spouseSupportKids")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(overrides, "spouseSupportKidsoption0")}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(overrides, "spouseSupportKidsoption1")}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(overrides, "spouseSupportKidsoption2")}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(overrides, "spouseSupportKidsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Helper support kids"
        placeholder="Please select an option"
        isDisabled={false}
        value={helperSupportKids}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids: value,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.helperSupportKids ?? value;
          }
          if (errors.helperSupportKids?.hasError) {
            runValidationTasks("helperSupportKids", value);
          }
          setHelperSupportKids(value);
        }}
        onBlur={() =>
          runValidationTasks("helperSupportKids", helperSupportKids)
        }
        errorMessage={errors.helperSupportKids?.errorMessage}
        hasError={errors.helperSupportKids?.hasError}
        {...getOverrideProps(overrides, "helperSupportKids")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(overrides, "helperSupportKidsoption0")}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(overrides, "helperSupportKidsoption1")}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(overrides, "helperSupportKidsoption2")}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(overrides, "helperSupportKidsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Family support kids"
        placeholder="Please select an option"
        isDisabled={false}
        value={familySupportKids}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids: value,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.familySupportKids ?? value;
          }
          if (errors.familySupportKids?.hasError) {
            runValidationTasks("familySupportKids", value);
          }
          setFamilySupportKids(value);
        }}
        onBlur={() =>
          runValidationTasks("familySupportKids", familySupportKids)
        }
        errorMessage={errors.familySupportKids?.errorMessage}
        hasError={errors.familySupportKids?.hasError}
        {...getOverrideProps(overrides, "familySupportKids")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(overrides, "familySupportKidsoption0")}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(overrides, "familySupportKidsoption1")}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(overrides, "familySupportKidsoption2")}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(overrides, "familySupportKidsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Spouse support household"
        placeholder="Please select an option"
        isDisabled={false}
        value={spouseSupportHousehold}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold: value,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.spouseSupportHousehold ?? value;
          }
          if (errors.spouseSupportHousehold?.hasError) {
            runValidationTasks("spouseSupportHousehold", value);
          }
          setSpouseSupportHousehold(value);
        }}
        onBlur={() =>
          runValidationTasks("spouseSupportHousehold", spouseSupportHousehold)
        }
        errorMessage={errors.spouseSupportHousehold?.errorMessage}
        hasError={errors.spouseSupportHousehold?.hasError}
        {...getOverrideProps(overrides, "spouseSupportHousehold")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(overrides, "spouseSupportHouseholdoption0")}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(overrides, "spouseSupportHouseholdoption1")}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(overrides, "spouseSupportHouseholdoption2")}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(overrides, "spouseSupportHouseholdoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Helper support household"
        placeholder="Please select an option"
        isDisabled={false}
        value={helperSupportHousehold}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold: value,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.helperSupportHousehold ?? value;
          }
          if (errors.helperSupportHousehold?.hasError) {
            runValidationTasks("helperSupportHousehold", value);
          }
          setHelperSupportHousehold(value);
        }}
        onBlur={() =>
          runValidationTasks("helperSupportHousehold", helperSupportHousehold)
        }
        errorMessage={errors.helperSupportHousehold?.errorMessage}
        hasError={errors.helperSupportHousehold?.hasError}
        {...getOverrideProps(overrides, "helperSupportHousehold")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(overrides, "helperSupportHouseholdoption0")}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(overrides, "helperSupportHouseholdoption1")}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(overrides, "helperSupportHouseholdoption2")}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(overrides, "helperSupportHouseholdoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Family support household"
        placeholder="Please select an option"
        isDisabled={false}
        value={familySupportHousehold}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold: value,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.familySupportHousehold ?? value;
          }
          if (errors.familySupportHousehold?.hasError) {
            runValidationTasks("familySupportHousehold", value);
          }
          setFamilySupportHousehold(value);
        }}
        onBlur={() =>
          runValidationTasks("familySupportHousehold", familySupportHousehold)
        }
        errorMessage={errors.familySupportHousehold?.errorMessage}
        hasError={errors.familySupportHousehold?.hasError}
        {...getOverrideProps(overrides, "familySupportHousehold")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(overrides, "familySupportHouseholdoption0")}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(overrides, "familySupportHouseholdoption1")}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(overrides, "familySupportHouseholdoption2")}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(overrides, "familySupportHouseholdoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Care giving"
        placeholder="Please select an option"
        isDisabled={false}
        value={careGiving}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving: value,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.careGiving ?? value;
          }
          if (errors.careGiving?.hasError) {
            runValidationTasks("careGiving", value);
          }
          setCareGiving(value);
        }}
        onBlur={() => runValidationTasks("careGiving", careGiving)}
        errorMessage={errors.careGiving?.errorMessage}
        hasError={errors.careGiving?.hasError}
        {...getOverrideProps(overrides, "careGiving")}
      >
        <option
          children="Yes"
          value="YES"
          {...getOverrideProps(overrides, "careGivingoption0")}
        ></option>
        <option
          children="No"
          value="No"
          {...getOverrideProps(overrides, "careGivingoption1")}
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
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving: value,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
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
        label="Helper support care giving"
        placeholder="Please select an option"
        isDisabled={false}
        value={helperSupportCareGiving}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving: value,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.helperSupportCareGiving ?? value;
          }
          if (errors.helperSupportCareGiving?.hasError) {
            runValidationTasks("helperSupportCareGiving", value);
          }
          setHelperSupportCareGiving(value);
        }}
        onBlur={() =>
          runValidationTasks("helperSupportCareGiving", helperSupportCareGiving)
        }
        errorMessage={errors.helperSupportCareGiving?.errorMessage}
        hasError={errors.helperSupportCareGiving?.hasError}
        {...getOverrideProps(overrides, "helperSupportCareGiving")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(overrides, "helperSupportCareGivingoption0")}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(overrides, "helperSupportCareGivingoption1")}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(overrides, "helperSupportCareGivingoption2")}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(overrides, "helperSupportCareGivingoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Ready to extend support"
        placeholder="Please select an option"
        isDisabled={false}
        value={readyToExtendSupport}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport: value,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.readyToExtendSupport ?? value;
          }
          if (errors.readyToExtendSupport?.hasError) {
            runValidationTasks("readyToExtendSupport", value);
          }
          setReadyToExtendSupport(value);
        }}
        onBlur={() =>
          runValidationTasks("readyToExtendSupport", readyToExtendSupport)
        }
        errorMessage={errors.readyToExtendSupport?.errorMessage}
        hasError={errors.readyToExtendSupport?.hasError}
        {...getOverrideProps(overrides, "readyToExtendSupport")}
      >
        <option
          children="Not applicable"
          value="Not_Applicable"
          {...getOverrideProps(overrides, "readyToExtendSupportoption0")}
        ></option>
        <option
          children="Weak"
          value="Weak"
          {...getOverrideProps(overrides, "readyToExtendSupportoption1")}
        ></option>
        <option
          children="Medium"
          value="Medium"
          {...getOverrideProps(overrides, "readyToExtendSupportoption2")}
        ></option>
        <option
          children="Strong"
          value="Strong"
          {...getOverrideProps(overrides, "readyToExtendSupportoption3")}
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
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments: value,
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
        label="Comment"
        isRequired={false}
        isReadOnly={false}
        value={comment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
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
