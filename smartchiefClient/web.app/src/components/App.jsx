import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import HomeContainer from 'components/home/HomeContainer';
import * as routes from 'components/routes';
import theme from 'shared/themes/theme';

const currentTheme = createMuiTheme(theme);

function App({store}) {
  return (
    <Provider store={store}>
    <MuiThemeProvider theme={currentTheme}>
      <div className="app-wrapper">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={routes.HOME_PAGE}
              component={HomeContainer}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </MuiThemeProvider>
  </Provider>
  );
}

App.propTypes = {
};

App.defaultProps = {
};

export default hot(module)(App);
