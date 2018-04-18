import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import jsonp from 'jsonp';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            status: null,
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }

    handleChange(e) {
        this.setState({ email: e.target.value })
    }

    subscribe() {
        const url = 'https://bdx.us10.list-manage.com/subscribe/post-json?u=3fdd02789fbab2f90b81652a3&id=760c78a462&EMAIL=' + this.state.email;

        jsonp(
            url,
            {
                param: "c"
            },
            (err, data) => {
                console.log("err, data", err, data);
                if (err) {
                    this.setState({
                        status: "error",
                        message: err
                    });
                } else if (data.result !== "success") {
                    this.setState({
                        status: "error",
                        message: data.msg
                    });
                } else {
                    this.setState({
                        email: '',
                        status: "success",
                        message: data.msg
                    });
                }
                //Clear message
                setTimeout(() => this.setState({ status: null, message: '' }), 5000)
            }
        )

    }

    render() {
        const { style } = this.props;
        const { email, status, message } = this.state;
        return (
            <div className="footer" style={style}>
                <div className="footer-signIn">
                    <div className="info">Vous souhaitez être tenu informé ?<br />Inscrivez-vous à la newsletter</div>
                    <div className="email">
                        <input type="email"
                            placeholder={'Email'}
                            value={email}
                            onChange={this.handleChange} />
                        <button type={'button'}
                            className={'button small white'}
                            onClick={this.subscribe}>
                            S'inscrire
                        </button>
                    </div>
                </div>
                <div className={`subscription-message column ${(status ? 'show' : '')}`}>{message}</div>
                <div className="columns footer-item">
                    <ul className="row">
                        <li className="columns shrink"><Link to="/home">Accueil</Link></li>
                        <li className="columns shrink"><Link to="/contact">Contact</Link></li>
                        <li className="columns auto text-right"><a href="https://twitter.com/bdxio"><i className="fa fa-twitter"></i></a></li>
                        <li className="columns shrink text-right"><a href="https://www.facebook.com/bdxio"><i className="fa fa-facebook-f"></i></a></li>
                        <li className="columns shrink text-right"><a href="https://www.linkedin.com/company/10651416/"><i className="fa fa-linkedin"></i></a></li>
                        <li className="columns shrink text-right"><a href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                </div>

                <small className="columns footer-date">@2018 - BDX I / O</small>
            </div >
        );
    }
}

Footer.propTypes = {
    style: PropTypes.object.isRequired,
};


export default Footer