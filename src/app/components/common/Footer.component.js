import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>
                    <div>Vous souhaitez être tenu•e informé•e ?<br/>Inscrivez-vous à la newsletter</div>
                    <div><input type="text" placeholder={'Email'}/></div>
                    <div><button type={'button'} className={'button'}>S'inscrire</button></div>
                </div>
                <div>
                    <ul>
                        <li>Accueil</li>
                        <li>Privacy</li>
                        <li>Termes et conditions</li>
                        <li>A propos</li>
                        <li>Contact</li>
                    </ul>
                    <div>twitter facebook linkedin</div>
                </div>
                @2018 - BDX I/O
            </div>
        );
    }
}

export default Footer