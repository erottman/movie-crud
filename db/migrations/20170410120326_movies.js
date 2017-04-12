'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('movies', (table) => {
    table.increments().notNullable();
    table.string('title').notNullable();
    table.string('director').notNullable();
    table.integer('year').notNullable();
    table.integer('my_rating').notNullable();
    table.text('poster_url').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies');
};
