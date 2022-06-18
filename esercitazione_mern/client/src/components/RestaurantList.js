import React from 'react';
import restaurantServices from '../services/restaurants'

import Restaurant from './Restaurant'

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {restaurants: [], next: null}
        this.handleGet = this.handleGet.bind(this);
    }

    componentDidMount() {
        this.handleGet();
    }

    handleGet() {
        restaurantServices.getAll(this.state.next)
            .then(data => {
                this.setState({
                    restaurants: [...this.state.restaurants, data[0].map(r =>
                        <Restaurant data={r} handleOpenSideCard={this.props.handleOpenSideCard} />)],
                    next: data[1]
                })
            })
    }

    render() {
        return (
            this.state.restaurants.length > 0 ? (
                <>
                    <div className="row">
                        {this.state.restaurants}
                    </div>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.handleGet}>Carica altri</button>
                    </div>
                </>
            ) : <>Nessun ristorante trovato</>
        )}
}

export default RestaurantList;