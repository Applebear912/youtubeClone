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
      videoEmbeddable: true,
    },
    dataType: 'json',
    success: function(data) {
      callback(data);
    }
  });
};

//  readAll: function(successCB, errorCB = null) {
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
