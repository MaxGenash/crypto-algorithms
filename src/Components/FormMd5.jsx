import React, { Component } from 'react';
import Md5Model from '../Models/Md5/Md5Model';
import "./FormMd5.css";

export default class FormMd5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            way: 'enc',
            mode: 'ecb',
            key: '',
            text: '',
            result: '',
        };

        this._model = new Md5Model();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let result;
        result = this._model.hash(this.state.text);
        this.setState({result});
    }

    render() {
        return (
            <section>
                <h2>MD5 algorithm </h2>
                <form className="form-horizontal initial-data-form" onSubmit={this.handleSubmit}>
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
                            Hash
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