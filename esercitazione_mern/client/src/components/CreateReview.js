import React from 'react';
import restaurantServices from '../services/restaurants'

class CreateReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            restaurantId: '',
            reviewText: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const requestBody = {
            userId: this.state.userId,
            restaurantId: this.props.restaurant._id,
            reviewText: this.state.reviewText
        }
        restaurantServices.postReview(requestBody);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <h4>Nuova review</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group pb-3">
                        <input className="form-control" placeholder="ID Utente" type="text" required
                               onChange={this.handleChange} value={this.state.userId} name="userId"/>
                    </div>
                    <div className="form-group pb-3">
                        <textarea
                            className="form-control"
                            required
                            placeholder="Recensione"
                            name="reviewText"
                            onChange={this.handleChange}
                            value={this.state.text}
                        />
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Crea review"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateReview;