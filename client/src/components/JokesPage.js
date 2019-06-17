import React from 'react';

import Carousel from './Carousel.js';

import api from '../helpers/api';
import withAuth from '../helpers/withAuth';

class JokesPage extends React.Component {
    state = {
        jokes: [],
    }
    async componentDidMount() {
        try {
            const result = await api.get('/jokes');
            // suffle data obtained from the db
            const resultRandom = result.data.sort(function() {
                return .5 - Math.random();
            });
            this.setState({
                jokes: resultRandom,
            })
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        return (
            <Carousel jokes={this.state.jokes} />
        )
    }
}

export default withAuth(JokesPage);