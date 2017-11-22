import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import FormAes from './FormAes'
import FormDes from './FormDes'
import FormKalina from './FormKalina'
import FormRsa from './FormRsa'
import FormElGamal from './FormElGamal'
import FormMd5 from "./FormMd5";
import FormSha3 from "./FormSha3";
import FormKupyna from "./FormKupyna";
import ToDo from './ToDo'
import './App.css';
import FormDiffieHellman from "./Protocol/DiffieHellman/FormDiffieHellman";
import FormEratosthenesSieve from "./FormEratosthenesSieve";

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
                <Redirect exact from="/" to="aes" />
                <Route path="/symmetric-key/aes" component={FormAes} />
                <Route path="/symmetric-key/des" component={FormDes} />
                <Route path="/symmetric-key/kalina" component={FormKalina} />
                <Route path="/public-key/rsa" component={FormRsa} />
                <Route path="/public-key/elgamal" component={FormElGamal} />
                <Route path="/hashing/md5" component={FormMd5} />
                <Route path="/hashing/sha3" component={FormSha3} />
                <Route path="/hashing/kupyna" component={FormKupyna} />
                <Route path="/digital-signatures/rsa" component={ToDo} />
                <Route path="/digital-signatures/elgamal" component={ToDo} />
                <Route path="/digital-signatures/schnorr" component={ToDo} />
                <Route path="/digital-signatures/rabin" component={ToDo} />
                <Route path="/utils/extended_euclid_gcd_1" component={ToDo} />
                <Route path="/utils/extended_euclid_gcd_2" component={ToDo} />
                <Route path="/utils/sieve_of_eratosthenes" component={FormEratosthenesSieve} />
                <Route path="/utils/euclid_gcd" component={ToDo} />
                <Route path="/protocols/diffie_hellman" component={FormDiffieHellman} />
              </Switch>
            </main>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}
