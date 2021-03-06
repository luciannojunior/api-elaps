const clientesService = require('./../../services/clientesService');

module.exports = {
    cliente: (_, {id}, context) => {
        return clientesService.recuperarCliente(id).catch((erro)=>{
            // TODO: Aqui deve acontecer o tratamento de erros (possivelmente com o apollo-errors),
            // já que é considerada uma falha passar o erro da camada do BD para o Cliente
            // revelando detalhes de implementação
            return erro;
        });
    },
    clientes: (_, { data } , context) => {
        return clientesService.buscarClientes(data).then((clientes) => {
            return { 
                entities: clientes.docs,
                metadata: {
                    ...data,
                    ...clientes,
                }
             };
        });
    }
};