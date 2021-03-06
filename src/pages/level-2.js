import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import "../styles/page.css"

class Level2 extends React.Component {
  constructor(props) {
    super(props);
    const colors = ['light', 'medium', 'dark'];
    const squares = [];
    const array = [];
    for (let i = 0; i < 2; i++) {
      let random = Math.floor(Math.random()*3);
      squares.push(colors[random]);
      array.push(i);
    }

    let arrayOfArrays = [];

    for (let j = 0; j < array.length; j++) {
      let arrayToPush;
      if (array[j] === 0) {
        arrayToPush = array.slice();
      } else if (array[j] === 1) {
        arrayToPush = [j];
      }
      arrayOfArrays.push(arrayToPush);
    }

    this.state = {
      squares,
      arrayOfArrays,
      linkVisible: false
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    let linkVisible = this.state.linkVisible;

    let currentArray = this.state.arrayOfArrays[i].slice();
    for (let j = 0; j < currentArray.length; j++) {
      let currentSquare = currentArray[j];
      if (squares[currentSquare] === 'light') {
        squares[currentSquare] = 'medium';
      } else if (squares[currentSquare] === 'medium') {
        squares[currentSquare] = 'dark';
      } else if (squares[currentSquare] === 'dark') {
        squares[currentSquare] = 'disappear';
      } else if (squares[currentSquare] === 'disappear') {
        squares[currentSquare] = 'light';
      }
    }

    if (squares.every((element) => element === 'disappear')) {
      linkVisible = true;
    }

    this.setState({
      squares,
      linkVisible
    })
  }

  renderSquare(i) {
    return (
      <Square 
        color={this.state.squares[i]}
        linkVisible={this.state.linkVisible}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <Layout pageTitle="Level 2">
        <div className="board-center board-col-1-row-2">
          <div className="board-grid">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
          </div>
        </div>
        <div>
          <Link to="/level-3/"
            className={'link-text ' + (this.state.linkVisible ? 'show' : 'hide')}>
            Next Level
          </Link>
        </div>
      </Layout>
    );
  }
}

export default Level2;

function Square(props) {
  return (
    <button className={'square ' + props.color + ' ' + (props.linkVisible ? 'hide' : 'show')}  onClick={props.onClick}>
    </button>
  )
}
