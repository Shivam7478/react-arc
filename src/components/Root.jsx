import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {SignUp, SignIn, Home} from '../pages'


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={SignUp} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root