import React from 'react';
import api from '../helpers/api';
import withAuth from '../helpers/withAuth';

// import UsersList from './UsersList.js';

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
        return (
            <>
                <h1>JOKES</h1>
                {this.state.jokes.map(joke => {
                    return <p>{joke.joke}</p>
                })}
            </>
        )
    }
}

export default withAuth(JokesPage);