
import { Authenticator, Card, Collection, Flex, Heading, Label, Link, Tabs, withAuthenticator } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import { FormSchema } from '../amplify/data/resource';
import QuestionCreateForm from './ui-components/QuestionCreateForm';


const client = generateClient<FormSchema>();
function App() {
  const [questions, setQuestions] = useState<FormSchema["Question"]["type"][]>([]);
  const fetchQuestions = async () => {
    const { data: items } = await client.models.Question.list();
    setQuestions(items);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
  function getHistory() {
    return <>
    <Flex id='Read' >
      <Collection items={questions} type="list" isPaginated={true} isSearchable={true} itemsPerPage={2} column={3} row={5}>
        {(item, index) =>
          <Card key={index} backgroundColor={"inherit"} border={"brown"}>
            <Label children={item.interviewer} /> evaluated <Label children={item.candidateName} /> on <Label children={item.createdAt} />, <p></p>
            Learning Readiness: <Label children={item.learningReadiness} /> , <p></p>
            Marital Status: <Label children={item.maritalStatus} /><p></p>
            Care Giving:  <Label children={item.careGiving} /><p></p>
            Comment: <Label children={item.comment} /><p />
          </Card>
        }
      </Collection>
    </Flex>
    </>
  }
  function getForm() {
    return <>
     <Heading level={5}> Fill the form based on your feedback from the interview. </Heading>
     <Flex id="Create"  >
        <QuestionCreateForm />
    </Flex>
    </>
  }
  return (
    <Flex padding={"medium"} >
      <Authenticator>
        {({ signOut }) => (
          <main>
            <Heading level={1} children="Flexifit Feedback" alignSelf={"center"}></Heading>

            <Link children="Signout" onClick={signOut} alignSelf={"end"} />
              <Tabs defaultValue="create" justifyContent={"stretch"}
                items={[
                  { label: 'Create', value: 'create', content:  (getForm())  },
                  { label: 'History', value: 'read', content: (getHistory())  },
                ]}
              />
          </main>
        )}
      </Authenticator>
    </Flex>
  );
}
export default withAuthenticator(App);
