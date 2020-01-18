/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// little state machine will be initialized here
// you can read more about the hook in (https://www.gatsbyjs.org/docs/ssr-apis/#wrapRootElement)
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
