import React from 'react';

import restaurantServices from '../services/restaurants';
import CreateReview from "./CreateReview";

class SideCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {reviews: null}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        restaurantServices.getOne(this.props.restaurant._id)
            .then(data => {
                this.setState({
                    reviews: data.reviews
                })
            })
    }

    render() {
        return (
            <div>
                <h3>- {this.props.restaurant.name}</h3>
                {this.state.reviews && this.state.reviews.map(e => <div><h6>{e.user}</h6><p>{e.text}</p></div>)}
                <CreateReview restaurant={this.props.restaurant} />
            </div>
        )
    }
}

export default SideCard;