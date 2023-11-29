import logo from './logo.svg';
import './App.css';
import {Wizard} from "react-use-wizard";
import {Step} from "./Step";
import {createContext, useState} from "react";
import {DraftContext} from "./DraftContext";

function App() {
  const [draft, setDraft] = useState({
    propertyAccessible: ''
  });
  return (
    <div className="App">
      <DraftContext.Provider value={{ draft, setDraft}}>
        <Wizard>
          <Step step={1} />
          {draft.propertyAccessible === 'yes' && (
            <>
              <Step step={2} />
              <Step step={3} />
            </>)}
          <Step step={4} />
        </Wizard>
      </DraftContext.Provider>
    </div>
  );
}

export default App;
