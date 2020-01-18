/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const { StateMachineProvider, createStore,DevTool } = require("little-state-machine")
createStore({
  data: {}
})
exports.wrapRootElement = ({ element }) => {
  return (
    <StateMachineProvider>
      {process.env.NODE_ENV !== "production" &&
      typeof window !== "undefined" ? (
        <DevTool />
      ) : null}
      {element}
    </StateMachineProvider>
  )
}
