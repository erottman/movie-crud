'use strict';

exports.seed = function(knex) {
  return knex('movies').del()
    .then(() => {
      return knex('movies').insert([{
        id: 1,
        title: 'Big',
        director: 'Teddy Marshall',
        year: 1995,
        my_rating: 2,
        poster_url: 'http://www.couponcraze.com/sites/all/files/url_0.jpeg',

      }, {
        id: 2,
        title: 'Bright Lights Big City',
        director: 'Penny Marshall',
        year: 1984,
        my_rating: 4,
        poster_url: 'https://funknstuff.files.wordpress.com/2015/12/bright-lights-big-city-movie-poster-1988-1020209732.jpg?w=379&h=571',

   },{
       id: 4,
       title: 'Fight Club',
       director: 'Garry Marshall',
       year: 1986,
       my_rating: 5,
       poster_url: 'https://ok2disconnectportfolio.files.wordpress.com/2012/02/fight-club-hi-res-poster-vertical-a31.jpg',

  }]);
})
    .then(() => {
      return knex.raw(
        "SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));"
      );
    });
};
