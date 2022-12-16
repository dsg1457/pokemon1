import React, { Component } from 'react';

class Show extends React.Component {
    render() {
        const pokemon = this.props.pokemon
        console.log(this.props.pokemon)
        return (
            <div>
                <h1>{pokemon.name}</h1>
                <img alt={pokemon.name} src={pokemon.img}>

</div>
        
        );
    }
}

export default Show;