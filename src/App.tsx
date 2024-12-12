
import { Authenticator, Flex, Heading, Link, withAuthenticator } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import { FormSchema } from '../amplify/data/resource';
import QuestionCreateForm from './ui-components/QuestionCreateForm';

const client = generateClient<FormSchema>();
function App() {
  const [questions, setQuestions] = useState<FormSchema["Question"]["type"][]>([]);
  const fetchQuestions = async () => {
    const { data: items, errors } = await client.models.Question.list();
    setQuestions(items);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
  return (

    <Authenticator>
      {({ signOut}) => (
        <main>
          <Heading level={1} children ="Flexifit Feedback" alignSelf={"center"}></Heading>
          <ul>
        {questions.map(question => <li
          key={question.id}>
          {question.candidateId}
        </li>)}
      </ul>
      

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
 