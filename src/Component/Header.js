import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="app-header">
                <Link className={`logo-container`} to={`/`}>
                    <img src={this.props.logo || `http://logistics-upb.com/englishver/wp-content/uploads/2014/12/2.png`} id={`logo`} title={`Universitatea Politehnică Bucureşti`} alt={`err`}/>
                    <h1>Universitatea Politehnică Bucureşti</h1>
                </Link>

                { this.props.children }
            </div>
        );
    }
}

export default Header;