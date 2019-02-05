import React, { Component } from 'react';
import Header from '../../components/common/Header.component';
import displayPage from '../_PageContainer';
import UserCard from '../../components/common/UserCard.component';

class Speakers extends Component {
    constructor() {
        super();
        this.state = {
            isMobile: false,
        };
        this._onResize = this._onResize.bind(this);
    }

    componentWillMount() {
        this._onResize();
        window.addEventListener('resize', this._onResize);
    }

    componentWillUnmount() {
        document.removeEventListener('resize', this._onResize);
    }

    _onResize() {
        const isMobile = window.innerWidth <= 500;
        if (isMobile !== this.state.isMobile) {
            this.setState({ isMobile })
        }
    }

    render() {
        const { isMobile } = this.state;
        const { Speakers18 } = this.props.gsheet;
        let line = 0;
        return (
            <div>
                <Header title="SPEAKERS 2018" />
                <div className="row align-center users-container">
                
                    <div className="flottant-right">
                        <img src="img/svg/about_flottant.svg" />
                    </div>

                    <div className="column small-12 large-8">
                        <div className="row users-container-content">
                            {Speakers18.map((member, i) => {
                                if (!isMobile && i % 2 === 0) line++
                                return <UserCard key={`member_${i}`} user={member} imageAtRight={(line % 2 === 0)} />
                            })}
                        </div>
                    </div>

                    <div class="flottant-left">
                        <img src="img/svg/theme2_flottant.svg" />
                    </div>
                </div>
            </div>
        );
    }
}

export default displayPage(Speakers)