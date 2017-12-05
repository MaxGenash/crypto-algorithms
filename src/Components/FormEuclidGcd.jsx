import React, { Component } from 'react';
import EuclidGcdModel from '../Models/EuclidGcdModel';
import NumberEditor from './NumberEditor';

export default class FormEuclidGcd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: null,
      b: null,
      result: null,
    };

    this._model = new EuclidGcdModel();

    this.submitForm = this.submitForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    if (this.state.a === null)
      return alert('"a" is required!');
    if (this.state.b === null)
      return alert('"b" is required!');

    this.setState({
      result: this._model.findGcd(this.state.a, this.state.b)
    });
  }

  resetForm() {
    this.setState({
      a: null,
      b: null,
      result: null,
    });
  }
  
  render() {
    return (
      <section>
        <br/>
        <h2 className="text-center">
          Basic Euclid's algorithm for finding the greatest common divider of "a" and "b"
        </h2>
        <br/>
        <form className="form-horizontal initial-data-form" onSubmit={this.submitForm}>
          <div className="form-group form-row">
            <label className="col-auto col-form-label">
              <strong>a = </strong>
            </label>
            <div className="col">
              <NumberEditor
                value={this.state.a}
                onChange={newVal => this.setState({a: newVal})}
                placeholder="E.g.: 1173"
                className="form-control"
              />
            </div>
            <div className="w-100 d-block d-sm-none" >
              <br/>
            </div>
            <label className="col-auto offset-sm-1 col-form-label">
              <strong>b = </strong>
            </label>
            <div className="col">
              <NumberEditor
                value={this.state.b}
                onChange={newVal => this.setState({b: newVal})}
                placeholder="E.g.: 323"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary">
              Find
            </button>
            {' '}
            <button
              type="reset"
              className="btn btn-secondary"
              onClick={this.resetForm}
            >
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
