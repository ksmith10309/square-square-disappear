import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import "../styles/page.css"

class Level3 extends React.Component {
  constructor(props) {
    super(props);
    const colors = ['light', 'medium', 'dark']
    const random1 = Math.round(Math.random()*2);
    const random2 = Math.round(Math.random()*2);
    const random3 = Math.round(Math.random()*2);
    const squares = [colors[random1], colors[random2], colors[random3]];

    const array = [];
    for (let i = 0; i < 3; i++) {
      array.push(i);
    }
    shuffle(array);

    let arrayOfArrays = [];
    let fillingArray =  array.slice();

    for (let j = 0; j < array.length; j++) {
      let arrayToPush;
      if (array[j] === 0 || array[j] === 1) {
        let index = fillingArray.indexOf(j);
        if (fillingArray.length === 3) {
          fillingArray.splice(index, 1);
          arrayToPush = [j].concat([fillingArray[Math.round(Math.random())]]);
        } else {
          fillingArray.splice(index, 1);
          arrayToPush = [j].concat(fillingArray);
        }
        arrayOfArrays.push(arrayToPush);
      }
      else if (array[j] === 2) {
        arrayToPush = [j];
        arrayOfArrays.push(arrayToPush);
      }
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
      <Layout pageTitle="Level 3">
        <div className="board-center board-col-2-row-2">
          <div className="board-grid">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
        </div>
        <div>
          <Link to="/level-4/"
            className={'link-text ' + (this.state.linkVisible ? 'show' : 'hide')}>
            Next Level
          </Link>
        </div>
      </Layout>
    );
  }
}

export default Level3;

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
