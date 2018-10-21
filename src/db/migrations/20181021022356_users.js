const uuid = require('uuid/v4');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t) {
    t.increments('id').primary();
    t.uuid('uuid').notNullable().defaultTo(uuid());;
    t.string('user_name', 50).unique().notNullable();
    t.string('password', 100).notNullable();
    t.string('first_name', 200).notNullable();
    t.string('last_name', 200).notNullable();
    t.string('email', 200).unique().notNullable();
    t.string('user_image', 256);
    t.string('phone_number', 15);
    t.timestamp('created_at', true).notNullable().defaultTo(knex.fn.now());
    t.timestamp('updated_at', true).notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist('users');
};
