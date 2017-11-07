import React, { Component } from 'react';
import KupynaModel from '../Models/Kupyna/KupynaModel';
import "./FormSha3.css";

export default class FormKupyna extends Component {
    constructor(props) {
        super(props);
        this.state = {
            outputLength: 256,
            key: '',
            text: '',
            result: '',
        };

        this._model = new KupynaModel();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let result;
        result = this._model.hash(this.state.text, this.state.outputLength);
        this.setState({result});
    }

    render() {
        return (
            <section>
                <h2>Kupyna algorithm </h2>
                <select
                    value={this.state.outputLength}
                    className="form-control"
                    onChange={e => this.setState({outputLength: e.target.value})}
                >
                    <option value="224">224</option>
                    <option value="256">256</option>
                    <option value="384">384</option>
                    <option value="512">512</option>
                </select>
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