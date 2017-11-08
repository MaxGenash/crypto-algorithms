import React, { Component } from 'react';
import ElGamalModel from '../Models/ElGamalModel';

export default class FormElGamal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      way: 'enc',
      keys: {
        p: null, g: null, y: null,    // public
        x: null                       // secret
      },
      text: '',     // hi
      result: [],   // [{"a":"49","b":"972"},{"a":"393","b":"949"}]
    };

    this._model = new ElGamalModel();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateKeys = this.generateKeys.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let result;
    if(this.state.way === 'enc')
      result = this._model.encrypt(this.state.keys, this.state.text);
    else
      result = this._model.decrypt(this.state.keys, JSON.parse(this.state.text));
    this.setState({result});
  }

  generateKeys() {
    const keys = this._model.generateKeys();
    this.setState({keys});
  }

  render() {
    return (
      <section>
        <h2> Public-key ElGamal algorithm </h2>
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
            <label className="control-label" htmlFor="keys">
              <strong>Keys:</strong>
            </label>
            <textarea
              id="keys"
              rows="10"
              value={JSON.stringify(this.state.keys, 0, 2)}
              onChange={e => this.setState({privateKey: JSON.parse(e.target.value)})}
              className="form-control"
            />
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
            <div className="result-text">{JSON.stringify(this.state.result)}</div>
          </div>
        )}
      </section>
    );
  }
}
