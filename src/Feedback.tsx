import { useState, useEffect } from "react";
import type { FormSchema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<FormSchema>();

export default function QuestionList() {
  const [questions, setQuestions] = useState<FormSchema["Question"]["type"][]>([]);

  const fetchQuestions = async () => {
    const { data: items, errors } = await client.models.Question.list();
    setQuestions(items);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const createQuestion = async () => {
    await client.models.Question.create({
      content: window.prompt("Question content?"),
      isDone: false,
    });

    fetchQuestions();
  }

  return (
    <div>
      <button onClick={createQuestion}>Add new question</button>
      <ul>
        {questions.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </div>
  );
}