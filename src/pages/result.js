import React from "react"
import { useStateMachine } from "little-state-machine"
import updateAction from "../components/updateAction"

const Result = () => {
  const { state } = useStateMachine(updateAction)
  console.log(`state Result:${JSON.stringify(state,null,2)}`)
  return (
    <div className="result">
      <h2>Your Info Was Submitted Successfully!</h2>
      <h3>We'll get in touch with you very soon!</h3>
      <div hidden>
        <pre>{JSON.stringify(state, null, 2)}</pre>
        <h2>Result:</h2>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  )
}

export default Result