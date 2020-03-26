//criar tabela/migrante: npx knex migrate:make create_ nome da tabela
//comando para executar criação: npx knex migrate:latest

exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
  
        table.string('ong_id').notNullable(); //relacionamento

        table.foreign('ong_id').references('id').inTable('ongs'); //chave estrangeira
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
