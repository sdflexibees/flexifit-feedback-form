
import { Authenticator, Card, Collection, Flex, Heading, Label, Link, withAuthenticator } from '@aws-amplify/ui-react';
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
  return (
    <Flex padding={"medium"} >
    <Authenticator>
      {({ signOut }) => (
        <main>
          <Heading level={1} children="Flexifit Feedback" alignSelf={"center"}></Heading>        

          <Link children="Signout" onClick={signOut} alignSelf={"end"}/>
          
          <Flex justifyContent="space-between" paddingTop={"large"}>
              <Collection items={questions} type="grid" isPaginated={true} isSearchable={true} itemsPerPage={15} column={3} row={5}>
                {(item, index) =>
                  <Card key={index} backgroundColor={"inherit"} > 
                    <Label children={item.interviewer} /><p></p>
                    <Label children={item.candidateId} /><p></p>
                    <Label children={item.comment} /><p />
                    </Card>
              }
                  </Collection>
{/* 
          <Table title = "Existing List" variation='bordered' >
            <TableHead>
                <TableCell children= "Interviewer" />
                <TableCell children= "candidateId"/>
               <TableCell children="comment" />
            </TableHead>
            {questions.map(question =>
              <TableRow>
                <TableCell children={question.interviewer} />
                <TableCell children={question.candidateId}/>
               <TableCell children={question.comment} />
              </TableRow>
            )}
          </Table> */}
          </Flex>
          <p>


          </p>
          <Flex justifyContent="space-between" >
            <Heading level={5}> New Feedback: Fill the form based on your feedback from the interview. All fields are required </Heading>
          </Flex>
          <QuestionCreateForm />
        </main>
      )}
    </Authenticator>
      </Flex>
  );
}
export default withAuthenticator(App);
