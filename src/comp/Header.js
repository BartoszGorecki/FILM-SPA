import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {

    state = {
      active: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const status = this.state.active
        if(window.pageYOffset > 100) {
        this.setState({
            active: true
        })
        } else {
            this.setState({
                active: false
            })
        }
    }
    
    render() {
        return (
            <div className={ (this.state.active) ? "header scro" : "header"}>
                <Link to="/">
                    <div className="logo"><i class="fas fa-video"></i> Filmovie</div> 
                </Link>
                <nav>
        
                </nav>
            </div>
        )
    }
}

export default Header