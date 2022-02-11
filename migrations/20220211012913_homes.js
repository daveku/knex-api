/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable("homes").then((exist) => {
    if (!exist) {
      return knex.schema.createTable("homes", (table) => {
        table.increments("home_id").primary();
        // title
        table.string("title").notNullable();
        // description
        table.text("description").notNullable();
        // guests
        table.integer("guests").notNullable();
        // address
        table.string("address");
        // price

        // is_available
        table.boolean("is_available").notNullable().defaultTo(false);
        // created_at
        table.timestamp("created_at").defaultTo(knex.fn.now());
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable("homes").then((exist) => {
    if (exist) {
      return knex.schema.dropTable("homes");
    }
  });
};
