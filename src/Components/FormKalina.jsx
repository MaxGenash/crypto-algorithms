import React, { Component } from 'react';
import KalinaModel from '../Models/Kalina/KalinaModelCBC';

export default class FormKalina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      way: 'enc',
      mode: 'ecb',
      key: '',
      text: '',
      result: '',
    };

    this._model = new KalinaModel();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let result;
    if(this.state.way === 'enc')
      result = this._model.encrypt(this.state.mode, this.state.key, this.state.text);
    else
      result = this._model.decrypt(this.state.mode, this.state.key, this.state.text);
    this.setState({result});
  }

  render() {
    return (
      <section>
        <h2> Symmetric-key DSTU 7624:2014 (Kalina) algorithm </h2>
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
              <strong>Mode:</strong>
            </label>
            <select
              value={this.state.mode}
              className="form-control"
              onChange={e => this.setState({mode: e.target.value})}
            >
              <option value="ecb">ECB (electronic codebook)</option>
              <option value="cbc">CBC (cipher block chaining)</option>
              <option value="pcpc">PCBC (propagating cipher block chaining)</option>
              <option value="cfb">CFB (cipher feedback)</option>
              <option value="ofb">OFB (output feedback, in 8bit)</option>
            </select>
          </div>
          <div className="form-group">
            <label className="control-label">
              <strong>Key:</strong>
            </label>
            <input
              type="text"
              value={this.state.key}
              onChange={e => this.setState({key: e.target.value})}
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
            <div>{this.state.result}</div>
          </div>
        )}
      </section>
    );
  }
}
