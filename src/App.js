import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Heading from './Components/Heading'
import Home from './Components/Home'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Services from './Components/Services'
import Foot from './Components/Foot'

const RouteWithMenu = ({ component, ...rest }) => {
  const render = (Component) => (props) => {
    return <Component {...props} />
  }

  return (
    <>
      <Heading />
      <main className="content">
        <Route {...rest} render={render(component)} />
      </main>
      <Foot />
    </>
  );
}

class App extends Component {
  render() {
    return (
      <>
        <Router >
          <Switch>
            <RouteWithMenu exact path="/" component={Home} />
            <RouteWithMenu exact path="/gallery" component={Gallery} />
            <RouteWithMenu exact path="/about" component={About} />
            <RouteWithMenu exact path="/services" component={Services} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
