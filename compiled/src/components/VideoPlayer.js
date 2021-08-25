var VideoPlayer = ({
  video
}) => {
  if (!video) {
    return /*#__PURE__*/React.createElement("div", {
      className: "video-player"
    }, "Loading...");
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "video-player"
  }, /*#__PURE__*/React.createElement("div", {
    className: "embed-responsive embed-responsive-16by9"
  }, /*#__PURE__*/React.createElement("iframe", {
    className: "embed-responsive-item",
    src: 'https://www.youtube.com/embed/' + video.id.videoId,
    allowFullScreen: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "video-player-details"
  }, /*#__PURE__*/React.createElement("h3", null, video.snippet.title), /*#__PURE__*/React.createElement("div", null, video.snippet.description)));
}; // PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


VideoPlayer.propTypes = {
  video: PropTypes.object
}; // In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default VideoPlayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzeCJdLCJuYW1lcyI6WyJWaWRlb1BsYXllciIsInZpZGVvIiwiaWQiLCJ2aWRlb0lkIiwic25pcHBldCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFdBQVcsR0FBRyxDQUFDO0FBQUNDLEVBQUFBO0FBQUQsQ0FBRCxLQUFhO0FBQzdCLE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1Ysd0JBQU87QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUFQO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFRLElBQUEsU0FBUyxFQUFDLHVCQUFsQjtBQUEwQyxJQUFBLEdBQUcsRUFBRSxtQ0FBbUNBLEtBQUssQ0FBQ0MsRUFBTixDQUFTQyxPQUEzRjtBQUFvRyxJQUFBLGVBQWU7QUFBbkgsSUFERixDQURGLGVBSUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLGdDQUFLRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsS0FBbkIsQ0FERixlQUVFLGlDQUFNSixLQUFLLENBQUNHLE9BQU4sQ0FBY0UsV0FBcEIsQ0FGRixDQUpGLENBREY7QUFXRCxDQWZELEMsQ0FpQkE7QUFDQTs7O0FBQ0FOLFdBQVcsQ0FBQ08sU0FBWixHQUF3QjtBQUN0Qk4sRUFBQUEsS0FBSyxFQUFFTyxTQUFTLENBQUNDO0FBREssQ0FBeEIsQyxDQUlBO0FBQ0E7O0FBQ0EsZUFBZVQsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbInZhciBWaWRlb1BsYXllciA9ICh7dmlkZW99KSA9PiB7XG4gIGlmICghdmlkZW8pIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXJcIj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1iZWQtcmVzcG9uc2l2ZSBlbWJlZC1yZXNwb25zaXZlLTE2Ynk5XCI+XG4gICAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPVwiZW1iZWQtcmVzcG9uc2l2ZS1pdGVtXCIgc3JjPXsnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIHZpZGVvLmlkLnZpZGVvSWR9IGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXItZGV0YWlsc1wiPlxuICAgICAgICA8aDM+e3ZpZGVvLnNuaXBwZXQudGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdj57dmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuVmlkZW9QbGF5ZXIucHJvcFR5cGVzID0ge1xuICB2aWRlbzogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbmV4cG9ydCBkZWZhdWx0IFZpZGVvUGxheWVyO1xuIl19