import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { dividerClasses } from '@mui/material';
import Layout from './components/Layout';
import Customers from './pages/Customers'
import CustomersRegister from './pages/CustomersRegister';
import { useState } from 'react';

const excludePathnames = ['/login']


const App = () =>{

  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };


const notShouldRenderLayout = excludePathnames.some(e => e === window.location.pathname); 

    return(
    <div>
    <BrowserRouter>
      {
        (notShouldRenderLayout) 
        ? 
        <Switch>
          <Route path="/login">
            <Login onLogin={handleLogin} /> 
          </Route>
          
        </Switch>
        :
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/customers" component={Customers}/>
            <Route exact path="/customersRegister" component={CustomersRegister}/>
          </Switch>
      </Layout>
      }
      
    </BrowserRouter>
    </div>
    );
}

export default App;
