import React, { Component } from 'react'
import { URL, KEY } from './api'
import Navigation from './Navigation'
import MovieInfo from './MovieInfo'
import MovieInfoBar from './MovieInfoBar'
import FourColGrid from './FourColGrid'
import Actor from './Actor'
import Spinner from './Spinner'


class Movie extends Component {

  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  }
  
  componentDidMount() {
    this.setState({
      loading: true
    })
    const url = `${URL}movie/${this.props.match.params.movieId}?api_key=${KEY}&language=en-US`
    const url2 = `${URL}movie/${this.props.match.params.movieId}/credits?api_key=${KEY}`
    this.fetchItems(url)
    this.fetchActor(url2)
  }

  fetchItems = url => {
    fetch(url)
    .then(result => result.json())
    .then(json => {
      this.setState({
        movie: json
      })
      console.log('movie', json)
    })
  }

    fetchActor = url => {
      fetch(url)
      .then(result => result.json())
      .then(json => {
        const directors = json.crew.filter( mem => mem.job === "Director")
        this.setState({
          directors,
          actors: json.cast,
          loading: false
        })
        console.log('actor', json)
      })
    }

  render(){

    return (
      <div className="movie">
        <Navigation {...this.state.movie}/>
        <MovieInfo {...this.state.movie} directors={this.state.directors}/>
        <MovieInfoBar {...this.state.movie}/>

        {this.state.actors ? 
          (<FourColGrid>
            {this.state.actors.map( (ele, i) => {
              return <Actor key={i} actor={ele} />
            })}
          </FourColGrid>) : null }
        {this.state.loading ? <Spinner /> : null }
      </div>
    );
  }
}

export default Movie;