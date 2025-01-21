
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
Amplify.configure(outputs);
// Amplify.configure({
//   ...Amplify.getConfig(),
//   Interactions: {
//     LexV2: {
//       'AskBee': {
//         aliasId: 'FZX3BPXUZE',
//         botId: 'NAGRLGSR9P',
//         localeId: 'en_US',
//         region: 'ap-southeast-1'
//       }
//     }    
//   }
// });
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
        <App />
   </ThemeProvider>
);
