import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/common/Header.component';
import displayPage from './_PageContainer';

class TicketSwitch extends Component {
    state = {
        holderFirstname: "",
        holderLastanme: "",
        holderEmail: "",
        commandNumber: "",
        recipientFirstname: "",
        recipientLastname: "",
        recipientEmail: ""
    };

    isDisabled = () => {
        return (
            this.state.holderFirstname === "" ||
            this.state.holderLastanme === "" ||
            this.state.holderEmail === "" ||
            this.state.commandNumber === "" ||
            this.state.recipientFirstname === "" ||
            this.state.recipientLastname === "" ||
            this.state.recipientEmail === ""
        );
    }

    handleChange = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    }

    submit = () => {
        const {
            holderFirstname,
            holderLastanme,
            holderEmail,
            commandNumber,
            recipientFirstname,
            recipientLastname,
            recipientEmail
        } = this.state;

        const text = `
            Demande d'échange de ${holderFirstname} ${holderLastanme} (${holderEmail}).
            Son numéro de commande est ${commandNumber}.
            Le destinataire est ${recipientFirstname} ${recipientLastname} (${recipientEmail})
        `;

        fetch("https://us-central1-bdx-io-ticket-exchange.cloudfunctions.net/createExchange", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                holderFirstname,
                holderLastanme,
                holderEmail,
                commandNumber,
                recipientFirstname,
                recipientLastname,
                recipientEmail
            })
        });
        
    }

    render() {
        const {
            holderFirstname,
            holderLastanme,
            holderEmail,
            commandNumber,
            recipientFirstname,
            recipientLastname,
            recipientEmail
        } = this.state;

        return (
            <div>
                <Header title="Echange de billets" />

                <div className="row align-center">
                    <div class="ticket-switch__wrapper">
                        <h4 className="ticket-switch__title">Détenteur du billet</h4>
                        <div>
                            <label className="ticket-switch__label">Prénom</label>
                            <input className="ticket-switch__field" value={holderFirstname} onChange={this.handleChange('holderFirstname')} />
                        </div>
                        <div>
                            <label className="ticket-switch__label">Nom</label>
                            <input className="ticket-switch__field" value={holderLastanme} onChange={this.handleChange('holderLastanme')} />
                        </div>
                        <div>
                            <label className="ticket-switch__label">Email</label>
                            <input className="ticket-switch__field" value={holderEmail} onChange={this.handleChange('holderEmail')} />
                        </div>
                        <div>
                            <label className="ticket-switch__label">Numéro de commande</label>
                            <input className="ticket-switch__field" value={commandNumber} onChange={this.handleChange('commandNumber')} />
                        </div>
                        <h4 className="ticket-switch__title">Destinataire</h4>
                        <div>
                            <label className="ticket-switch__label">Prénom</label>
                            <input className="ticket-switch__field" value={recipientFirstname} onChange={this.handleChange('recipientFirstname')} />
                        </div>
                        <div>
                            <label className="ticket-switch__label">Nom</label>
                            <input className="ticket-switch__field" value={recipientLastname} onChange={this.handleChange('recipientLastname')} />
                        </div>
                        <div>
                            <label className="ticket-switch__label">Email</label>
                            <input className="ticket-switch__field" value={recipientEmail} onChange={this.handleChange('recipientEmail')} />
                        </div>
                        <div class="ticket-switch__button-wrapper">
                            <button className="ticket-switch__button button" disabled={this.isDisabled()} onClick={this.submit}>Envoyer</button>
                        </div>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default displayPage(TicketSwitch)
