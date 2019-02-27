import React, {Component, Fragment} from 'react';
import axios from 'axios'; //npm i axios -s
import './styles.css';


import Poke from './Pokemon';

class Pokemon extends Component {


    state = {
        pokemons: []
    }


    componentWillMount() {
        let url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964'
        var pokemons;
        axios.get(url)
            .then(pokemon => {
                pokemons = pokemon.data.results;
                this.setState({
                    pokemons
                });
            })
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        console.log(this.state.pokemons);
    }


    render() {
        return(
            <Fragment>
                <div className="jumbotron">
                    <h1 className="display-3">Mundo Pokemon!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for
                    calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and
                    spacing to space content out within the larger container.</p>
                </div>
                <div className="container">
                    <div className="row">
                        
                        {
                            this.state.pokemons.map((pokemon, index) => {
                                return (<div key={index} className="col-xs-12 col-md-4">
                                            <Poke {...pokemon} />
                                        </div>)
                            })
                        }
                            
                        
                    </div>
                </div>
                
            </Fragment>
        )
    }

}

export default Pokemon;


