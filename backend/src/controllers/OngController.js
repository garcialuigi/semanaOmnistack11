const crypto = require('crypto'); // gerar uma string aleatoria (id)
const connection = require('../database/connection');

module.exports = {

   async index(request, response) { //listar todas as ongs cadastradas no banco

        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body;

        const id = parseInt(crypto.randomBytes(3).toString('HEX'), 16);
   
        await connection('ongs').insert({ // inserindo dados na tabela ons
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })   
    
        return response.json({ id }); 
    }
};