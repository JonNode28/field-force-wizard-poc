import {useWizard} from "react-use-wizard";
import {useContext, useState} from "react";
import {DraftContext} from "./DraftContext";

export const Step = ({ step }) => {
  const { draft, setDraft } = useContext(DraftContext);
  const { handleStep, previousStep, nextStep } = useWizard();
  const [ text, setText ] = useState(draft.propertyAccessible)
  const handleNext = async () => {
    setDraft({
      ...draft,
      propertyAccessible: text
    })
    await nextStep()
  }
  return (
    <>
      <div>
        Step: {step}
      </div>
      <div>
        <input type='text' id='step-content' value={text} onChange={(e) => {
          setText(e.currentTarget.value)
        }} />
      </div>
      <button onClick={() => previousStep()}>Previous ⏮️</button>
      <button onClick={() => handleNext()}>Next ⏭</button>
    </>
  )
}