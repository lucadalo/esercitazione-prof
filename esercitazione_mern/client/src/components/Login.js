import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <h3>Login</h3>
                <form onSubmit={this.props.handleLogin}>
                    <div className="form-group pb-3">
                        <input className="form-control" placeholder="Username" type="text" required
                               onChange={this.handleChange} value={this.state.userId} name="userId"/>
                    </div>
                    <div className="form-group pb-3">
                        <input className="form-control" placeholder="Password" type="password" required
                               onChange={this.handleChange} value={this.state.restaurantId} name="restaurantId"/>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
            </>
        );
    }
}

export default Login;