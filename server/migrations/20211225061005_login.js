
exports.up = function(knex, Promise) {
    let createQuery = `CREATE TABLE login(
      id SERIAL PRIMARY KEY NOT NULL,
      username TEXT,
      role TEXT,
      token TEXT,
      password_digest TEXT,
    )`;
    return knex.raw(createQuery);
  };
  
  exports.down = function(knex, Promise) {
    let dropQuery = `DROP TABLE login`;
    return knex.raw(dropQuery);
  };