import React from 'react';

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpenSideCard = this.handleOpenSideCard.bind(this);
    }

    handleOpenSideCard() {
        this.props.handleOpenSideCard(this.props.data);
    }

    render() {
        return (
            <div className="col-lg-4 pb-1">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" onClick={this.handleOpenSideCard}>
                            {this.props.data.name ? this.props.data.name : <>Senza nome</>}
                        </h5>
                        <p className="card-text">{this.props.data.cuisine}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Restaurant;