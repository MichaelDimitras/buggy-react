import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import List from './list.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    axios.get('/characters')
      .then(data => {
        this.setState({characters: data.data.results});
      })
      .catch(err => console.error('Error getting data from server', err));
  }

  render() {
    return (
      <div>
        <h1>Star Wars</h1>
        <List characters={this.state.characters}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
