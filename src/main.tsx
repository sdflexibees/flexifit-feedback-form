
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

       

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
        <App />
   </ThemeProvider>
);
