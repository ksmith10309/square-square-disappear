import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import "../styles/page.css"

class Level1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: ['light'],
      linkVisible: false
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    let linkVisible = this.state.linkVisible;

    if (squares[i] === 'light') {
      squares[i] = 'medium';
    } else if (squares[i] === 'medium') {
      squares[i] = 'dark';
    } else if (squares[i] === 'dark') {
      squares[i] = 'disappear';
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
      <Layout pageTitle="Level 1">
        <div className="game-board-1-row">
          <div className="board-grid-1-col">
            {this.renderSquare(0)}
          </div>
        </div>
        <div>
          <Link to="/level-2/"
            className={'link-text ' + (this.state.linkVisible ? 'show' : 'hide')}>
            Next Level
          </Link>
        </div>
      </Layout>
    );
  }
}

export default Level1;

function Square(props) {
  return (
    <button className={'square ' + props.color + ' ' + (props.linkVisible ? 'hide' : 'show')}  onClick={props.onClick}>
    </button>
  )
}
