import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Question } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuestionUpdateFormInputValues = {
    candidateName?: string;
    candidateAge?: string;
    candidateId?: string;
    candidateLocation?: string;
    interviewer?: string;
    Location?: string;
    interviewerJobLocation?: string;
    ResponsibilitiesAndRoles?: string;
    TypeOfRoleSuitableFor?: string;
    typeOfContractSuggested?: string;
    DriveToWorkOrIntentToWork?: string;
    ImmediateCareerAmbitions?: string;
    financialDriveToWork?: string;
    learningReadiness?: string;
    JobSearchAndReadiness?: string;
    JobSearchSuccessForShortTermJobs?: string;
    lastWorked?: string;
    maritalStatus?: string;
    Single?: string;
    AgeOfYoungestKid?: string;
    SupportFromSpouseForKids?: string;
    SupportFromSpouseForHouseholdChores?: string;
    SupportFromHelpersForKids?: string;
    SupportFromHelpersForHouseholdChores?: string;
    SupportFromOtherFamilyMembersForKids?: string;
    SupportFromOtherFamilyMembersForHouseholdChores?: string;
    careGivingResponsibilities?: string;
    extentOfCareGiving?: string;
    SupportFromHelpersForCareGivingChores?: string;
    WillingnessToExpandHelpSystem?: string;
    OtherCommitments?: string;
    AvailabilityOfHoursIdentifiedByInterviewer?: number;
    comment?: string;
};
export declare type QuestionUpdateFormValidationValues = {
    candidateName?: ValidationFunction<string>;
    candidateAge?: ValidationFunction<string>;
    candidateId?: ValidationFunction<string>;
    candidateLocation?: ValidationFunction<string>;
    interviewer?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
    interviewerJobLocation?: ValidationFunction<string>;
    ResponsibilitiesAndRoles?: ValidationFunction<string>;
    TypeOfRoleSuitableFor?: ValidationFunction<string>;
    typeOfContractSuggested?: ValidationFunction<string>;
    DriveToWorkOrIntentToWork?: ValidationFunction<string>;
    ImmediateCareerAmbitions?: ValidationFunction<string>;
    financialDriveToWork?: ValidationFunction<string>;
    learningReadiness?: ValidationFunction<string>;
    JobSearchAndReadiness?: ValidationFunction<string>;
    JobSearchSuccessForShortTermJobs?: ValidationFunction<string>;
    lastWorked?: ValidationFunction<string>;
    maritalStatus?: ValidationFunction<string>;
    Single?: ValidationFunction<string>;
    AgeOfYoungestKid?: ValidationFunction<string>;
    SupportFromSpouseForKids?: ValidationFunction<string>;
    SupportFromSpouseForHouseholdChores?: ValidationFunction<string>;
    SupportFromHelpersForKids?: ValidationFunction<string>;
    SupportFromHelpersForHouseholdChores?: ValidationFunction<string>;
    SupportFromOtherFamilyMembersForKids?: ValidationFunction<string>;
    SupportFromOtherFamilyMembersForHouseholdChores?: ValidationFunction<string>;
    careGivingResponsibilities?: ValidationFunction<string>;
    extentOfCareGiving?: ValidationFunction<string>;
    SupportFromHelpersForCareGivingChores?: ValidationFunction<string>;
    WillingnessToExpandHelpSystem?: ValidationFunction<string>;
    OtherCommitments?: ValidationFunction<string>;
    AvailabilityOfHoursIdentifiedByInterviewer?: ValidationFunction<number>;
    comment?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionUpdateFormOverridesProps = {
    QuestionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    candidateName?: PrimitiveOverrideProps<TextFieldProps>;
    candidateAge?: PrimitiveOverrideProps<SelectFieldProps>;
    candidateId?: PrimitiveOverrideProps<TextFieldProps>;
    candidateLocation?: PrimitiveOverrideProps<TextFieldProps>;
    interviewer?: PrimitiveOverrideProps<TextFieldProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    interviewerJobLocation?: PrimitiveOverrideProps<TextFieldProps>;
    ResponsibilitiesAndRoles?: PrimitiveOverrideProps<SelectFieldProps>;
    TypeOfRoleSuitableFor?: PrimitiveOverrideProps<SelectFieldProps>;
    typeOfContractSuggested?: PrimitiveOverrideProps<SelectFieldProps>;
    DriveToWorkOrIntentToWork?: PrimitiveOverrideProps<SelectFieldProps>;
    ImmediateCareerAmbitions?: PrimitiveOverrideProps<SelectFieldProps>;
    financialDriveToWork?: PrimitiveOverrideProps<SelectFieldProps>;
    learningReadiness?: PrimitiveOverrideProps<SelectFieldProps>;
    JobSearchAndReadiness?: PrimitiveOverrideProps<SelectFieldProps>;
    JobSearchSuccessForShortTermJobs?: PrimitiveOverrideProps<SelectFieldProps>;
    lastWorked?: PrimitiveOverrideProps<SelectFieldProps>;
    maritalStatus?: PrimitiveOverrideProps<SelectFieldProps>;
    Single?: PrimitiveOverrideProps<SelectFieldProps>;
    AgeOfYoungestKid?: PrimitiveOverrideProps<SelectFieldProps>;
    SupportFromSpouseForKids?: PrimitiveOverrideProps<SelectFieldProps>;
    SupportFromSpouseForHouseholdChores?: PrimitiveOverrideProps<SelectFieldProps>;
    SupportFromHelpersForKids?: PrimitiveOverrideProps<SelectFieldProps>;
    SupportFromHelpersForHouseholdChores?: PrimitiveOverrideProps<SelectFieldProps>;
    SupportFromOtherFamilyMembersForKids?: PrimitiveOverrideProps<SelectFieldProps>;
    SupportFromOtherFamilyMembersForHouseholdChores?: PrimitiveOverrideProps<SelectFieldProps>;
    careGivingResponsibilities?: PrimitiveOverrideProps<SelectFieldProps>;
    extentOfCareGiving?: PrimitiveOverrideProps<SelectFieldProps>;
    SupportFromHelpersForCareGivingChores?: PrimitiveOverrideProps<SelectFieldProps>;
    WillingnessToExpandHelpSystem?: PrimitiveOverrideProps<SelectFieldProps>;
    OtherCommitments?: PrimitiveOverrideProps<SelectFieldProps>;
    AvailabilityOfHoursIdentifiedByInterviewer?: PrimitiveOverrideProps<TextFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionUpdateFormProps = React.PropsWithChildren<{
    overrides?: QuestionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    question?: Question;
    onSubmit?: (fields: QuestionUpdateFormInputValues) => QuestionUpdateFormInputValues;
    onSuccess?: (fields: QuestionUpdateFormInputValues) => void;
    onError?: (fields: QuestionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionUpdateFormInputValues) => QuestionUpdateFormInputValues;
    onValidate?: QuestionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionUpdateForm(props: QuestionUpdateFormProps): React.ReactElement;
