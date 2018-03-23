import React, { Component } from 'react';

class SponsorsBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">
                <div className="columns text-center">
                    <h5 className="sectionTitle">Nos sponsors Impériaux</h5>
                    <h6>Merci à nos sponsors pour leur soutient !!! \( ^  ^)°/</h6>
                </div>

                <div>
                    <div>logo Apside</div>
                    <div>logo 4sh</div>
                    <div>logo Zenika</div>
                    <div>logo PointChaud</div>
                    <div>logo Miaou</div>
                    <div>logo Bouh</div>
                </div>
            </div>
        );
    }
}

export default SponsorsBar