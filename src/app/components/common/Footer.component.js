import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row footer">
                <div className="columns align-center align-middle footer-signIn">
                    <div>Vous souhaitez être tenu(e) informé(e) ?<br />Inscrivez-vous à la newsletter</div>
                    <input className="small-2" type="text" placeholder={'Email'} />
                    <div><button type={'button'} className={'button small white'}>S'inscrire</button></div>
                </div>

                <div className="columns footer-item">
                    <ul className="row">
                        <li className="columns shrink">Accueil</li>
                        <li className="columns shrink">Privacy</li>
                        <li className="columns shrink">Termes et conditions</li>
                        <li className="columns shrink">A propos</li>
                        <li className="columns shrink">Contact</li>
                        <li className="columns auto text-right"><i className="fa fa-twitter"></i></li>
                        <li className="columns shrink text-right"><i className="fa fa-facebook-f"></i></li>
                        <li className="columns shrink text-right"><i className="fa fa-linkedin"></i></li>
                    </ul>
                </div>

                <small className="columns footer-date">@2018 - BDX I / O</small>
            </div >
        );
    }
}

export default Footer