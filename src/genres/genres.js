import React, { Component } from 'react';
import axios from 'axios';
import './genres.css';

class genres extends Component {
    state = {
        title: [],
        genres: []
    }

    async componentDidMount() {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=34651b29c2c31f97c875d1f83f8f1d6d&language=en-US');
        this.setState({genres: response.data.genres});
        console.log(this.state.genres);
    }

    render() {
        const genres = this.state.genres.map(genre => {
            return <option key={genre.id} value={genre.id}>{genre.name}</option>
        })
        let sel = document.getElementById('genre_selector')

        
        let opt = ''
        let array = this.state.genres
        let index = []
        let selOpt = ''
        let toRemove = ''
        let genreFilter = ''

        const genreClickHandler = () => {
            genreFilter = null
            opt = sel.options[sel.selectedIndex]
            selOpt = Number(opt.value)
            
            for(let i = 0; i < array.length; i++){
                index.push(this.state.genres[i].id)
            }
            
            toRemove = index.indexOf(selOpt)
            index.splice(toRemove, 1)
            index.join('%')
            genreFilter = index.join('%').toString()

            console.log(genreFilter)            
        }

        const selector = <select 
                            onClick={genreClickHandler} className="custom-select" id="genre_selector">

                                <option>Genres...</option>
                                        {genres}
                        </select>
        
        return (
            <div className="App">
                {selector}
            </div>
        );
    }
}
export default genres;