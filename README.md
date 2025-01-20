## Flexifit Feedback form for Recruiters
Flexifit Feedback form is to capture the feedback from flexifit interview of candidates and understand their readiness for flexible jobs.
### Local Testing:
Built using - https://docs.amplify.aws/react/start/quickstart/#4-set-up-local-environment (Dec 2024)
1. Run Sandbox using following command for locahost testing -
npx ampx sandbox
2. Run - UI
npm run dev

Steps:
Data Model Changes:
1. Make Changes to the amplify/data/resources file.
2. Save the changes


UI changes
Original code built using - https://docs.amplify.aws/react/build-ui/formbuilder/ (Dec 2024)
1. If Data Changes are there then regenerate the form - 
npx ampx generate forms --out-dir src/ui-components
2. UI specific changes can be done in the CSS file





## This application was built with following steps from - AWS Amplify React+Vite Starter Template

This repository provides a starter template for creating applications using React+Vite and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview

This template equips you with a foundational React application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/react/start/quickstart/#deploy-a-fullstack-app-to-aws) of our documentation.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
