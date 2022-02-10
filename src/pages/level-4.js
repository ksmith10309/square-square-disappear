import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import "../styles/page.css"

class Level4 extends React.Component {
  constructor(props) {
    super(props);
    const colors = ['light', 'medium', 'dark'];
    const squares = [];
    const array = [];
    for (let i = 0; i < 4; i++) {
      let random = Math.floor(Math.random()*3);
      squares.push(colors[random]);
      array.push(i);
    }
    shuffle(array);

    let arrayOfArrays = Array(4).fill(null);
    let fillingArray =  array.slice();

    for (let j = 0; j < array.length; j++) {
      let arrayToPush;

      if (j === 0) {
        fillingArray.splice(fillingArray.indexOf(array[j]), 1);
        arrayToPush = [array[j]].concat(fillingArray[Math.floor(Math.random())*2], fillingArray[2]);
      } else if (j === 1) {
        fillingArray.splice(fillingArray.indexOf(array[j]), 1);
        arrayToPush = [array[j]].concat(fillingArray[Math.floor(Math.random()*2)]);
      } else if (j === 2) {
        fillingArray.splice(fillingArray.indexOf(array[j]), 1);
        arrayToPush = [array[j]].concat(fillingArray);
      } else {
        arrayToPush = [array[j]];
      }

      arrayOfArrays[array[j]] = arrayToPush;
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
      <Layout pageTitle="Level 4">
        <div className="board-center board-col-2-row-2">
          <div className="board-grid">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
          </div>
        </div>
        <div>
          <Link to="/level-5/"
            className={'link-text ' + (this.state.linkVisible ? 'show' : 'hide')}>
            Next Level
          </Link>
        </div>
      </Layout>
    );
  }
}

export default Level4;

function Square(props) {
  return (
    <button className={'square ' + props.color + ' ' + (props.linkVisible ? 'hide' : 'show')}  onClick={props.onClick}>
    </button>
  )
}

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp, current, top = array.length;

  if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
  }

  return array;
}
