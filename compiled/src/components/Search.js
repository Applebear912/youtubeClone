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
    return /*#__PURE__*/React.createElement("div", {
      className: "search-bar form-inline"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      type: "text",
      val: this.state.q,
      onChange: this.getInput
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn hidden-sm-down",
      onClick: this.handleClick
    }, /*#__PURE__*/React.createElement("span", {
      className: "glyphicon glyphicon-search"
    })));
  }

}

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJxIiwiZ2V0SW5wdXQiLCJiaW5kIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVNlYXJjaCIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxNQUFNQSxNQUFOLFNBQXFCQyxLQUFLLENBQUNDLFNBQTNCLENBQXFDO0FBQ25DQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLENBQUMsRUFBRTtBQURRLEtBQWI7QUFHQSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDRDs7QUFFREQsRUFBQUEsUUFBUSxDQUFDRyxLQUFELEVBQVE7QUFDZCxTQUFLQyxRQUFMLENBQWM7QUFDWkwsTUFBQUEsQ0FBQyxFQUFFSSxLQUFLLENBQUNFLE1BQU4sQ0FBYUM7QUFESixLQUFkO0FBR0Q7O0FBRURKLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCQSxJQUFBQSxLQUFLLENBQUNJLGNBQU47QUFDQSxTQUFLVixLQUFMLENBQVdXLFlBQVgsQ0FBd0IsS0FBS1YsS0FBTCxDQUFXQyxDQUFuQztBQUNEOztBQUVEVSxFQUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0U7QUFBTyxNQUFBLFNBQVMsRUFBQyxjQUFqQjtBQUFnQyxNQUFBLElBQUksRUFBQyxNQUFyQztBQUE0QyxNQUFBLEdBQUcsRUFBRSxLQUFLWCxLQUFMLENBQVdDLENBQTVEO0FBQStELE1BQUEsUUFBUSxFQUFFLEtBQUtDO0FBQTlFLE1BREYsZUFFRTtBQUFRLE1BQUEsU0FBUyxFQUFDLG9CQUFsQjtBQUF1QyxNQUFBLE9BQU8sRUFBRSxLQUFLRTtBQUFyRCxvQkFDRTtBQUFNLE1BQUEsU0FBUyxFQUFDO0FBQWhCLE1BREYsQ0FGRixDQURGO0FBUUQ7O0FBOUJrQzs7QUFpQ3JDLGVBQWVULE1BQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgU2VhcmNoID0gKCkgPT4gKFxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbi8vICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiAvPlxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCI+XG4vLyAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbi8vICAgICA8L2J1dHRvbj5cbi8vICAgPC9kaXY+XG4vLyApO1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHE6ICcnXG4gICAgfTtcbiAgICB0aGlzLmdldElucHV0ID0gdGhpcy5nZXRJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRJbnB1dChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTZWFyY2godGhpcy5zdGF0ZS5xKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyIGZvcm0taW5saW5lXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHZhbD17dGhpcy5zdGF0ZS5xfSBvbkNoYW5nZT17dGhpcy5nZXRJbnB1dH0gLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiJdfQ==