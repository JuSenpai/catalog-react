import React from 'react';
import {withRouter, Link} from "react-router-dom";

class Error extends React.Component {
    title() {
        return <h1>{this.props.title}</h1>;
    }
    body() {
        return <h4>{this.props.location.state.message}</h4>;
    }
    footer() {
        return <Link className="footer-link" to="/">Înapoi</Link>;
    }

    render() {
        return (
            <div className="container">
                <div className="col-lg-12">
                    <div className="error-container">
                        <div className="error-title">
                            {this.title()}
                        </div>
                        <div className="error-body">
                            {this.body()}
                        </div>
                        <div className="error-footer">
                            {this.footer()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Error);