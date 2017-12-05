import React, { Component } from 'react';
import ExtendedEuclidCongruenceRelationModel from '../Models/ExtendedEuclidCongruenceRelationModel';
import NumberEditor from './NumberEditor';

export default class FormExtendedEuclidCongruenceRelation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: null,
      b: null,
      n: null,
      x: null,
    };

    this._model = new ExtendedEuclidCongruenceRelationModel();

    this.submitForm = this.submitForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    if (this.state.a === null)
      return alert('"a" is required!');
    if (this.state.b === null)
      return alert('"b" is required!');
    if (this.state.n === null)
      return alert('"n" is required!');

    this.setState({
      x: this._model.findGcd(this.state.a, this.state.b, this.state.n)
    });
  }

  resetForm() {
    this.setState({
      a: null,
      b: null,
      n: null,
      x: null,
    });
  }
  
  render() {
    return (
      <section>
        <br/>
        <h2 className="text-center">
          Extended Euclid's algorithm 2 for solving
          <span className="no-text-carry"> (ax ≡ b mod n) </span>
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
                placeholder="E.g.: 37"
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
                placeholder="E.g.: 5"
                className="form-control"
              />
            </div>
            <div className="w-100 d-block d-sm-none" >
              <br/>
            </div>
            <label className="col-auto offset-sm-1 col-form-label">
              <strong>n = </strong>
            </label>
            <div className="col">
              <NumberEditor
                value={this.state.n}
                onChange={newVal => this.setState({n: newVal})}
                placeholder="E.g.: 1940"
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
        {(this.state.x !== null) && (
          <div>
            <hr/>
            <h5>x = {this.state.x}</h5>
          </div>
        )}
      </section>
    );
  }
}
