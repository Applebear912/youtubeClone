import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYoutube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.handleSearch('react');
  }

  handleSearch(q) {
    var context = this;
    searchYouTube(q, function (videos) {
      context.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("nav", {
      className: "navbar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-6 offset-md-3"
    }, /*#__PURE__*/React.createElement(Search, {
      handleSearch: this.handleSearch
    }))), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-7"
    }, /*#__PURE__*/React.createElement(VideoPlayer, {
      video: this.state.currentVideo
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-md-5"
    }, /*#__PURE__*/React.createElement(VideoList, {
      videos: this.state.videos,
      handleClick: this.handleClick
    }))));
  }

} // In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiVmlkZW9MaXN0IiwiVmlkZW9QbGF5ZXIiLCJTZWFyY2giLCJleGFtcGxlVmlkZW9EYXRhIiwic2VhcmNoWW91VHViZSIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwidmlkZW9zIiwiY3VycmVudFZpZGVvIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiaGFuZGxlU2VhcmNoIiwiY29tcG9uZW50RGlkTW91bnQiLCJxIiwiY29udGV4dCIsInNldFN0YXRlIiwidmlkZW8iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3QixrQkFBeEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsNkJBQTdCO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQix5QkFBMUI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFrQztBQUNoQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUFFQyxNQUFBQSxNQUFNLEVBQUUsRUFBVjtBQUFjQyxNQUFBQSxZQUFZLEVBQUU7QUFBNUIsS0FBYjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JELElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0Q7O0FBRURFLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCLFNBQUtELFlBQUwsQ0FBa0IsT0FBbEI7QUFDRDs7QUFHREEsRUFBQUEsWUFBWSxDQUFDRSxDQUFELEVBQUk7QUFDZCxRQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUNBZCxJQUFBQSxhQUFhLENBQUNhLENBQUQsRUFBSSxVQUFTTixNQUFULEVBQWlCO0FBQ2hDTyxNQUFBQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUI7QUFDZlIsUUFBQUEsTUFBTSxFQUFFQSxNQURPO0FBRWZDLFFBQUFBLFlBQVksRUFBRUQsTUFBTSxDQUFDLENBQUQ7QUFGTCxPQUFqQjtBQUlELEtBTFksQ0FBYjtBQU1EOztBQUVERSxFQUFBQSxXQUFXLENBQUNPLEtBQUQsRUFBUTtBQUNqQixTQUFLRCxRQUFMLENBQWM7QUFBRVAsTUFBQUEsWUFBWSxFQUFFUTtBQUFoQixLQUFkO0FBQ0Q7O0FBRURDLEVBQUFBLE1BQU0sR0FBRztBQUNQLHdCQUNFLDhDQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0Usb0JBQUMsTUFBRDtBQUFRLE1BQUEsWUFBWSxFQUFFLEtBQUtOO0FBQTNCLE1BREYsQ0FERixDQURGLGVBTUU7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSxvQkFBQyxXQUFEO0FBQWEsTUFBQSxLQUFLLEVBQUUsS0FBS0wsS0FBTCxDQUFXRTtBQUEvQixNQURGLENBREYsZUFJRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0Usb0JBQUMsU0FBRDtBQUFXLE1BQUEsTUFBTSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0MsTUFBOUI7QUFBc0MsTUFBQSxXQUFXLEVBQUUsS0FBS0U7QUFBeEQsTUFERixDQUpGLENBTkYsQ0FERjtBQWlCRDs7QUE3QytCLEMsQ0FnRGxDO0FBQ0E7OztBQUVBLGVBQWVSLEdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlkZW9MaXN0IGZyb20gJy4vVmlkZW9MaXN0LmpzJztcbmltcG9ydCBWaWRlb1BsYXllciBmcm9tICcuL1ZpZGVvUGxheWVyLmpzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2guanMnO1xuaW1wb3J0IGV4YW1wbGVWaWRlb0RhdGEgZnJvbSAnLi4vZGF0YS9leGFtcGxlVmlkZW9EYXRhLmpzJztcbmltcG9ydCBzZWFyY2hZb3VUdWJlIGZyb20gJy4uL2xpYi9zZWFyY2hZb3V0dWJlLmpzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgdmlkZW9zOiBbXSwgY3VycmVudFZpZGVvOiBudWxsIH07XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNlYXJjaCA9IHRoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhhbmRsZVNlYXJjaCgncmVhY3QnKTtcbiAgfVxuXG5cbiAgaGFuZGxlU2VhcmNoKHEpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgc2VhcmNoWW91VHViZShxLCBmdW5jdGlvbih2aWRlb3MpIHtcbiAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICB2aWRlb3M6IHZpZGVvcyxcbiAgICAgICAgY3VycmVudFZpZGVvOiB2aWRlb3NbMF1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2sodmlkZW8pIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFZpZGVvOiB2aWRlb30pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICAgIDxTZWFyY2ggaGFuZGxlU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaH0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICA8VmlkZW9QbGF5ZXIgdmlkZW89e3RoaXMuc3RhdGUuY3VycmVudFZpZGVvfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgPFZpZGVvTGlzdCB2aWRlb3M9e3RoaXMuc3RhdGUudmlkZW9zfSBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19