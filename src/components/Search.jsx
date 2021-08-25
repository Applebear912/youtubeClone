// var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: ''
    };
    this.getInput = this.getInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getInput(event) {
    this.setState({
      q: event.target.value
    });
  }

  handleClick(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.q);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" val={this.state.q} onChange={this.getInput} />
        <button className="btn hidden-sm-down" onClick={this.handleClick}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
