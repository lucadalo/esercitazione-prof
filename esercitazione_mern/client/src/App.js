import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';

import RestaurantList from "./components/RestaurantList";
import SideCard from "./components/SideCard";
import Login from "./components/Login";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null,
            sidebarOpened: false,
            shownRestaurant: null,
            shownReviews: []
        }
        this.handleOpenSideCard = this.handleOpenSideCard.bind(this);
    }

    handleOpenSideCard(rest) {
        this.setState({
            sidebarOpened: true,
            shownRestaurant: rest,
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a href="/restaurants" className="navbar-brand">YouFood</a>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            { this.state.user ? <a className="nav-link">Logout</a> : <a className="nav-link">Login</a>}
                        </li>
                    </div>
                </nav>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-9">
                            <RestaurantList handleOpenSideCard={this.handleOpenSideCard}/>
                        </div>
                        <div className="col-lg-3">
                            <div className="row">
                                <Login handleLogin={this.login} />
                            </div>
                            {this.state.sidebarOpened &&
                                <div className="row mt-3">
                                    <SideCard restaurant={this.state.shownRestaurant} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
