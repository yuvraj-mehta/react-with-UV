import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <h1>Custom App!</h1>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: "https://www.google.com",
//     target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)

const anotheruser = "chai aur code";

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App/>
  reactElement
)
