import * as React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import Main from './Components/Packages/Main/Main';

import About from './Demos/About/About';
import Topics from './Demos/Topics/Topics';
import AbsoluteFooter from './Demos/AbsoluteFooter/AbsoluteFooter';

class AppRoutes extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Main}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
        <Route path="/absoluteFooter" component={AbsoluteFooter}/>
      </Switch>
    );
  }
}

export default withRouter(AppRoutes);