import React, {Component} from 'react';
import EratosthenesSieveModel from '../Models/EratosthenesSieveModel';

export default class FormEratosthenesSieve extends Component {

    constructor(props) {
        super(props);

        // this.upperBound = 0;
        this.primeNumbers = [];

        this.eratosthenesSieve = new EratosthenesSieveModel();

        this.generatePrimeNumbers = this.generatePrimeNumbers.bind(this);
    }

    generatePrimeNumbers() {
        this.primeNumbers = this.eratosthenesSieve.findPrimeNumber(this.upperBound);
        console.log(this.primeNumbers);
    }

    render() {
        return (
            <section>
                <h2>Eratosthenes Sieve</h2>
                <form className="form-horizontal initial-data-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="control-label">
                            <strong>Upper bound:</strong>
                        </label>
                        <textarea
                            id="upperBound"
                            rows="1"
                            value={this.upperBound}
                            onChange={e => this.upperBound = e.target.value}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label">
                            <strong>Prime numbers:</strong>
                        </label>
                        <h6>
                            {
                                this.primeNumbers
                            }
                        </h6>
                    </div>


                    <div className="form-group text-center">
                        <button
                            id="generate"
                            className="btn btn-success"
                            type="button"
                            onClick={this.generatePrimeNumbers}
                        >
                            Generate Prime numbers
                        </button>
                    </div>
                </form>
            </section>
        );
    }
}