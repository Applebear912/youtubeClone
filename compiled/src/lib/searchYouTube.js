import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});
var server = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';

var searchYouTube = (q, callback) => {
  $.ajax({
    type: 'GET',
    url: server,
    data: {
      q: q || 'react',
      query: YOUTUBE_API_KEY,
      videoEmbeddable: true
    },
    dataType: 'json',
    success: function (data) {
      callback(data);
    }
  });
}; //  readAll: function(successCB, errorCB = null) {
//   $.ajax({
//     url: Parse.server,
//     type: 'GET',
//     data: { order: '-createdAt' },
//     contentType: 'application/json',
//     success: successCB,
//     error: errorCB || function(error) {
//       console.error('chatterbox: Failed to fetch messages', error);
//     }
//   });
// }


export default searchYouTube;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VhcmNoWW91VHViZS5qcyJdLCJuYW1lcyI6WyJBUElfS0VZIiwiWU9VVFVCRV9BUElfS0VZIiwiJCIsImFqYXhQcmVmaWx0ZXIiLCJzZXR0aW5ncyIsIl8iLCJqcVhIUiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZXJ2ZXIiLCJzZWFyY2hZb3VUdWJlIiwicSIsImNhbGxiYWNrIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwicXVlcnkiLCJ2aWRlb0VtYmVkZGFibGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE9BQVQsRUFBa0JDLGVBQWxCLFFBQXlDLHFCQUF6QztBQUVBQyxDQUFDLENBQUNDLGFBQUYsQ0FBZ0IsVUFBVUMsUUFBVixFQUFvQkMsQ0FBcEIsRUFBdUJDLEtBQXZCLEVBQThCO0FBQzVDQSxFQUFBQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCLGVBQXZCLEVBQXdDUCxPQUF4QztBQUNELENBRkQ7QUFJQSxJQUFJUSxNQUFNLEdBQUcseURBQWI7O0FBR0EsSUFBSUMsYUFBYSxHQUFHLENBQUNDLENBQUQsRUFBSUMsUUFBSixLQUFpQjtBQUNuQ1QsRUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFLEtBREQ7QUFFTEMsSUFBQUEsR0FBRyxFQUFFTixNQUZBO0FBR0xPLElBQUFBLElBQUksRUFBRTtBQUNKTCxNQUFBQSxDQUFDLEVBQUVBLENBQUMsSUFBSSxPQURKO0FBRUpNLE1BQUFBLEtBQUssRUFBRWYsZUFGSDtBQUdKZ0IsTUFBQUEsZUFBZSxFQUFFO0FBSGIsS0FIRDtBQVFMQyxJQUFBQSxRQUFRLEVBQUUsTUFSTDtBQVNMQyxJQUFBQSxPQUFPLEVBQUUsVUFBU0osSUFBVCxFQUFlO0FBQ3RCSixNQUFBQSxRQUFRLENBQUNJLElBQUQsQ0FBUjtBQUNEO0FBWEksR0FBUDtBQWFELENBZEQsQyxDQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLGVBQWVOLGFBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfS0VZLCBZT1VUVUJFX0FQSV9LRVkgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLmpzJztcblxuJC5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uIChzZXR0aW5ncywgXywganFYSFIpIHtcbiAganFYSFIuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIEFQSV9LRVkpO1xufSk7XG5cbnZhciBzZXJ2ZXIgPSAnaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL3JlY2FzdGx5L3ZpZGVvcyc7XG5cblxudmFyIHNlYXJjaFlvdVR1YmUgPSAocSwgY2FsbGJhY2spID0+IHtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnR0VUJyxcbiAgICB1cmw6IHNlcnZlcixcbiAgICBkYXRhOiB7XG4gICAgICBxOiBxIHx8ICdyZWFjdCcsXG4gICAgICBxdWVyeTogWU9VVFVCRV9BUElfS0VZLFxuICAgICAgdmlkZW9FbWJlZGRhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gIHJlYWRBbGw6IGZ1bmN0aW9uKHN1Y2Nlc3NDQiwgZXJyb3JDQiA9IG51bGwpIHtcbi8vICAgJC5hamF4KHtcbi8vICAgICB1cmw6IFBhcnNlLnNlcnZlcixcbi8vICAgICB0eXBlOiAnR0VUJyxcbi8vICAgICBkYXRhOiB7IG9yZGVyOiAnLWNyZWF0ZWRBdCcgfSxcbi8vICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgIHN1Y2Nlc3M6IHN1Y2Nlc3NDQixcbi8vICAgICBlcnJvcjogZXJyb3JDQiB8fCBmdW5jdGlvbihlcnJvcikge1xuLy8gICAgICAgY29uc29sZS5lcnJvcignY2hhdHRlcmJveDogRmFpbGVkIHRvIGZldGNoIG1lc3NhZ2VzJywgZXJyb3IpO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFlvdVR1YmU7XG4iXX0=