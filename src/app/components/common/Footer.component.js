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
        this.emailInput = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }

    componentWillReceiveProps(props) {
        const { subscriptionHasFocused } = props;
        if (subscriptionHasFocused) this.emailInput.current.focus();

    }

    handleChange(e) {
        this.setState({ email: e.target.value })
    }

    subscribe(e) {
        e.preventDefault();
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
                        message: "Merci pour votre inscription !"
                    });
                }
                //Clear message
                setTimeout(() => this.setState({ status: null, message: '' }), 5000)
            }
        )

    }

    render() {
        const { email, status, message } = this.state;
        return (
            <div className="footer">
                <div className="footer-signIn">
                    <div className="info">Vous souhaitez être tenu informé ?<br />Inscrivez-vous à la newsletter</div>
                    <form className="email" onSubmit={this.subscribe}>
                        <input type="email"
                            placeholder='Email'
                            value={email}
                            ref={this.emailInput}
                            onChange={this.handleChange} />
                        <button type='submit'
                            className={'button small white'}>
                            S'inscrire
                        </button>
                    </form>
                </div>
                <div className={`subscription-message column ${(status ? 'show' : '')}`}>{message}</div>
                <div className="footer-item">
                    <ul className="row">
                        <li className="columns shrink"><Link to="/home">Accueil</Link></li>
                        <li className="columns shrink"><Link to="/contact">Contact</Link></li>
                        <li className="columns auto text-right"><a href="https://twitter.com/bdxio"><i className="fa fa-twitter"></i></a></li>
                        <li className="columns shrink text-right"><a href="https://www.facebook.com/bdxio"><i className="fa fa-facebook-f"></i></a></li>
                        <li className="columns shrink text-right"><a href="https://www.linkedin.com/company/10651416/"><i className="fa fa-linkedin"></i></a></li>
                        <li className="columns shrink text-right"><a href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                </div>

                <small className="footer-date">@2018 - BDX I / O</small>
            </div >
        );
    }
}

Footer.propTypes = {
    subscriptionHasFocused: PropTypes.bool.isRequired,
};


export default Footer