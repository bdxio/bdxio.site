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

                <div className="row ticket-switch__container">
                    <div class="column small-11 large-6 ticket-switch__wrapper">
                        <h4 className="">Détenteur du billet</h4>
                        <div className="row align-justify align-middle ticket-switch__spacer collapse">
                            <label className="column small-4 ticket-switch__label">Prénom</label>
                            <input className="column auto ticket-switch__field required" value={holderFirstname} onChange={this.handleChange('holderFirstname')} />
                        </div>
                        <div className="row align-justify align-middle ticket-switch__spacer collapse">
                            <label className="column small-4 ticket-switch__label">Nom</label>
                            <input className="column auto ticket-switch__field required" value={holderLastanme} onChange={this.handleChange('holderLastanme')} />
                        </div>
                        <div className="row align-justify align-middle ticket-switch__spacer collapse">
                            <label className="column small-4 ticket-switch__label">Email</label>
                            <input className="column auto ticket-switch__field required" value={holderEmail} onChange={this.handleChange('holderEmail')} />
                        </div>
                        <div className="row align-justify align-middle ticket-switch__spacer collapse">
                            <label className="column small-4 ticket-switch__label">Numéro de commande</label>
                            <input className="column auto ticket-switch__field required" value={commandNumber} onChange={this.handleChange('commandNumber')} />
                        </div>
                        <h4 className="ticket-switch__title">Destinataire</h4>
                        <div className="row align-justify align-middle ticket-switch__spacer collapse">
                            <label className="column small-4 ticket-switch__label">Prénom</label>
                            <input className="column auto ticket-switch__field required" value={recipientFirstname} onChange={this.handleChange('recipientFirstname')} />
                        </div>
                        <div className="row align-justify align-middle ticket-switch__spacer collapse">
                            <label className="column small-4 ticket-switch__label">Nom</label>
                            <input className="column auto ticket-switch__field required" value={recipientLastname} onChange={this.handleChange('recipientLastname')} />
                        </div>
                        <div className="row align-justify align-middle ticket-switch__spacer collapse">
                            <label className="column small-4 ticket-switch__label">Email</label>
                            <input className="column auto ticket-switch__field required" value={recipientEmail} onChange={this.handleChange('recipientEmail')} />
                        </div>
                        <div class="ticket-switch__button-wrapper">
                            <button className="ticket-switch__button button medium primary" disabled={this.isDisabled()} onClick={this.submit}>Envoyer</button>
                        </div>
                    </div>

                    <div className=" column small-6 ticket-switch__img">
                        <img src="img/png/img_ticketsSwitch.png"/>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default displayPage(TicketSwitch)
