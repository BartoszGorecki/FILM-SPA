import React, { Component } from 'react'
import { URL, KEY, IMAGE, POSTER, BACKDROP } from './api'
import HeroImage from './comp/HeroImage'
import SearchBar from './comp/SearchBar'
import FourColGird from './comp/FourColGrid'
import MovieThumb from './comp/MovieThumb'
import LoadMoreBtn from './comp/LoadMoreBtn'
import Spinner from './comp/Spinner'

class Home extends Component {

  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ''
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    const url = `${URL}movie/popular?api_key=${KEY}&language=en-US&page=1`
    this.fetchItems(url)
  }

  searchItems = (searchTerm) => {
    let url = ''
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    })

    if (searchTerm === '') {
      url = `${URL}movie/popular?api_key=${KEY}&language=en-US&page=1`
    } else {
      url = `${URL}search/movie?api_key=${KEY}&language=en-US&query=${this.state.searchTerm}&page=1`
    }
    this.fetchItems(url)
  }

  loadMoreItems = () => {
    this.setState({
      loading: true
    })
    let url = ''
    if (this.state.searchTerm === '') {
      url = `${URL}movie/popular?api_key=${KEY}&language=en-US&page=${this.state.currentPage + 1}`
    } else {
      url = `${URL}search/movie?api_key=${KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`
    }
    this.fetchItems(url)
  }


  fetchItems = (url) => {
    fetch(url, {method: 'GET'})
    .then( response => response.json())
    .then( json => {
        this.setState({
          movies: [...this.state.movies, ...json.results],
          heroImage: this.state.heroImage || json.results[0],
          loading: false,
          currentPage: json.page,
          totalPages: json.total_pages

        })
    })
  }

  render() {
    return (
      <div className="Home">

        {this.state.heroImage ?
        <div className="tiptop">
          <HeroImage 
              image={`${IMAGE}${BACKDROP}${this.state.heroImage.backdrop_path}`}
              title={this.state.heroImage.original_title}
              text={this.state.heroImage.overview}
          />
          <SearchBar callback={this.searchItems}/>
        </div> : null }

        <FourColGird
          header={this.state.searchTerm ? 'Search Result' : 'Popular Movies'}
          loading={this.state.loading}
        >
            {this.state.movies.map( ele =>{
              return <MovieThumb
                        key={ele.id}
                        clickable={true}
                        image={ele.poster_path ? `${IMAGE}${POSTER}${ele.poster_path}` : null }
                        movieId={ele.id}
                        movieName={ele.original_title}
                      />
            })}
        </FourColGird>
        {this.state.loading ? <Spinner /> : null }
        {this.state.currentPage <= this.state.totalPages && this.state.loading==false ? 
        <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} /> : null}
        
      </div>
    );
  }
}

export default Home;