
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t) {
    t.uuid('id').primary();
    t.string('username', 50).unique().notNullable();
    t.string('first_name', 200).notNullable();
    t.string('last_name', 200).notNullable();
    t.integer('email', 200).unique().notNullable();
    t.string('user_image', 256);
    t.integer('phone_number', 15);
    t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  
};
