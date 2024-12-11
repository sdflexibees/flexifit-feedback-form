
import {  withAuthenticator } from '@aws-amplify/ui-react';
import QuestionCreateForm from "./ui-components/QuestionCreateForm";

function App() {
  return (
    <main>
      <div>
        <h1>My Feedback</h1>
        <QuestionCreateForm />
        </div>
    </main>
  );
}
export default withAuthenticator(App);
