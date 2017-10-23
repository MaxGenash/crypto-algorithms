import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import FormAes from './FormAes'
import FormDes from './FormDes'
import FormKalina from './FormKalina'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <section className="container-fluid section-main">
          <div className="row">
            <Sidebar/>
            <main className="col-12 col-md-9 col-xl-9 py-md-3 pl-md-5 main" role="main">
              <Switch>
                <Redirect exact from="/" to='aes' />
                <Route path="/aes" component={FormAes} />
                <Route path="/des" component={FormDes} />
                <Route path="/kalina" component={FormKalina} />
              </Switch>
            </main>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}
