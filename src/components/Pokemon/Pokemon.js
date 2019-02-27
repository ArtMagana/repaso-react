import React, {Component} from 'react';
import axios from 'axios'; //npm i axios -s


class Poke extends Component {
    

    state = {
        url: ''
    }
    

    componentWillMount() {
        let url = `${this.props.url}`
        axios.get(url)
            .then(info => {
                let url =  info.data.sprites.front_default;
                this.setState({
                    url
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return(
            <div className='poke-card'>
                <img src={this.state.url} alt={this.props.name}/>
                <br/>
                {this.props.name}
            </div>
        )
    }
}


export default Poke;