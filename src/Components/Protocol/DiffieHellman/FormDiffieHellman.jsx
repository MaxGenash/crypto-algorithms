import React, {Component} from 'react';
import Recipient from '../../../Models/Protocol/DiffieHellman/RecipientModel';
import './FormDiffieHellman.css'

export default class FormDiffieHellman extends Component {
    constructor(props) {
        super(props);

        this.publicBase = Math.floor(Math.random() * 500 + 2);
        this.publicModulus = Math.floor(Math.random() * 1000 + 1000);

        this.recepient1 = new Recipient(this.publicBase, this.publicModulus);
        this.recepient2 = new Recipient(this.publicBase, this.publicModulus);

    }

    // handleSubmit(e) {
    //     e.preventDefault();
    // }

    render() {
        return (
            <section>
                <h2>Diffie–Hellman key exchange</h2>
                <div className='form-group'>
                    <label className="control-label">
                        <strong>
                            Steps:
                        </strong>
                        <h6>
                            Generate public base: <span className="visible-for-third-parties">{this.publicBase}</span>
                        </h6>
                        <h6>
                            Generate public modulus: <span
                            className="visible-for-third-parties">{this.publicModulus}</span>
                        </h6>
                        <h6>
                            Wendell Hicks choose private key: <span
                            className="not-visible-for-third-parties">{this.recepient1.getPrivateKey()}</span>
                        </h6>
                        <h6>
                            Adiv Wolanowska choose private key: <span
                            className="not-visible-for-third-parties">{this.recepient2.getPrivateKey()}</span>
                        </h6>
                        <h6>
                            Wendell Hicks calculate public key and sent it to Adiv Wolanowska: &nbsp;
                            <strong className="formula">
                                {this.publicBase} <sup>{this.recepient1.getPrivateKey()}</sup> mod {this.publicModulus}
                                =
                                <span className="visible-for-third-parties">
                                    {this.recepient1.getPublicKey()}
                                </span>
                                <br/>
                            </strong>
                        </h6>
                        <h6>
                            Adiv Wolanowska calculate public key and sent it to Wendell Hicks : &nbsp;
                            <strong>
                                {this.publicBase} <sup>{this.recepient2.getPrivateKey()}</sup> mod {this.publicModulus}
                                =
                                <span className="visible-for-third-parties">
                                    {this.recepient2.getPublicKey()}
                                </span>
                            </strong>
                            <br/>
                        </h6>
                        <h6>
                            Wendell Hicks receive &nbsp;
                            <span className="visible-for-third-parties">{this.recepient2.getPublicKey()}</span>
                            &nbsp; and generate shared secret key: &nbsp;
                            <strong>
                                {this.recepient2.getPublicKey()}<sup>{this.recepient1.getPrivateKey()}</sup>
                                mod {this.publicModulus} =
                                <span className="not-visible-for-third-parties">
                                    {this.recepient1.generateSharedSecretKey(this.recepient2.getPublicKey())}
                                </span>
                            </strong>
                            <br/>
                        </h6>
                        <h6>
                            Adiv Wolanowska receive &nbsp;
                            <span className="visible-for-third-parties">{this.recepient1.getPublicKey()}</span>
                            &nbsp; and generate shared secret key: &nbsp;
                            <strong>
                                {this.recepient1.getPublicKey()}<sup>{this.recepient2.getPrivateKey()}</sup>
                                mod {this.publicModulus} =
                                <span className="not-visible-for-third-parties">
                                    {this.recepient2.generateSharedSecretKey(this.recepient1.getPublicKey())}
                                </span>
                            </strong>
                            <br/>
                        </h6>
                    </label>
                </div>
            </section>
        );
    }
}