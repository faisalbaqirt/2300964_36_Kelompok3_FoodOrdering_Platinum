/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    { name: 'paket ayam geprek', description: 'ayam geprek beserta nasi', price: 15000 },
    { name: 'ayam geprek', description: 'ayam geprek', price: 12000 }
  ]);
};
