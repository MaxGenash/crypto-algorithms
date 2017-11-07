import React, { Component } from 'react';
import RsaModel from '../Models/RsaModel';

export default class FormRsa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      way: 'enc',
      keySize: 512,
      privateKey: '',
      publicKey: '',
      text: '',
      result: '',
    };

    this._model = new RsaModel();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateKeys = this.generateKeys.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let result;
    if(this.state.way === 'enc') {
      if (!this.state.publicKey) {
        alert('Public key is required!');
        return;
      }
      result = this._model.encrypt(this.state.publicKey, this.state.text);
    } else {
      if (!this.state.privateKey) {
        alert('Private key is required!');
        return;
      }
      result = this._model.decrypt(this.state.privateKey, this.state.text);
    }
    this.setState({result});
  }

  generateKeys() {
    const {privateKey, publicKey} = this._model.generateKeys(this.state.keySize);
    this.setState({privateKey, publicKey});
  }

  render() {
    return (
      <section>
        <h2> Public-key RSA algorithm </h2>
        <form className="form-horizontal initial-data-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="control-label">
              <strong>Way:</strong>
            </label>
            <select
              value={this.state.way}
              className="form-control"
              onChange={e => this.setState({way: e.target.value})}
            >
              <option value="enc">Encryption</option>
              <option value="dec">Decryption</option>
            </select>
          </div>
          <div className="form-group">
            <label className="control-label">
              <strong>Key size:</strong>
            </label>
            <select
              value={this.state.keySize}
              className="form-control"
              onChange={e => this.setState({keySize: e.target.value})}
            >
              <option value="512">512 bit</option>
              <option value="1024">1024 bit</option>
              <option value="2048">2048 bit</option>
              <option value="4096">4096 bit</option>
            </select>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="privkey">Private Key:</label>
                <br />
                <textarea
                  id="privkey"
                  rows="10"
                  value={this.state.privateKey}
                  onChange={e => this.setState({privateKey: e.target.value})}
                  className="form-control"
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="pubkey">Public Key:</label>
                <br />
                <textarea
                  id="pubkey"
                  rows="10"
                  value={this.state.publicKey}
                  onChange={e => this.setState({publicKey: e.target.value})}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label">
              <strong>Text:</strong>
            </label>
            <textarea
              value={this.state.text}
              onChange={e => this.setState({text: e.target.value})}
              className="form-control"
              rows="10"
            />
          </div>
          <div className="form-group text-center">
            <button
              id="generate"
              className="btn btn-success"
              type="button"
              onClick={this.generateKeys}
            >
              Generate New Keys
            </button>
            {' '}
            <button type="submit" className="btn btn-primary">
              {this.state.way === 'enc' ? 'Encrypt' : 'Decrypt'}
            </button>
            {' '}
            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
          </div>
        </form>
        {this.state.result && (
          <div>
            <hr/>
            <h5>Result:</h5>
            <div className="result-text">{this.state.result}</div>
          </div>
        )}
      </section>
    );
  }
}
