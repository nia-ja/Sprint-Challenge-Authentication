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
            this.setState({
                jokes: result.data,
            })
        } catch (err) {
            console.log(err);
        }

    }
    render() {
        console.log(this.state.jokes)
        return (
            this.state.jokes && <Carousel jokes={this.state.jokes} />
        )
    }
}

export default withAuth(JokesPage);