import React from 'react';
import { Route, Switch } from "react-router-dom";

import Layout from './hoc/Layout/Layout';
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./containers/Auth/Login/Login";
import Logout from "./containers/Auth/Logout/Logout";
import Register from "./containers/Auth/Register/Register";

function App() {
  return (
		<div>
			<Layout>
				<Switch>
					<Route path="/register" component={Register} />
					<Route path="/logout" component={Logout} />
					<Route path="/login" component={Login} />
					<Route path="/" exact component={LandingPage} />
				</Switch>
			</Layout>
    </div>
  );
}

export default App;
