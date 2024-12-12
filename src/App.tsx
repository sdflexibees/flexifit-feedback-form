
import { Authenticator, Button, Flex, Heading, Link, withAuthenticator } from '@aws-amplify/ui-react';
import QuestionCreateForm from "./ui-components/QuestionCreateForm";

function App() {
  return (

    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <Heading level={1} children ="Flexifit Feedback" alignSelf={"center"}></Heading>
          <Flex justifyContent="space-between" paddingRight={"large"} paddingTop={"large"} paddingLeft={"large"}>
            <Heading level={4}> Fill the form based on your feedback from the interview. All fields are required </Heading>
            <Link children="Signout" onClick={signOut} />
          </Flex>
          <QuestionCreateForm />
        </main>
      )}
    </Authenticator>

  );
}
export default withAuthenticator(App);
 