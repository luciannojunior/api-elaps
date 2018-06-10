const Veiculo = require('../models/Veiculo');
const veiculosService = {};

/**
 * Faz a busca de veiculos na base de dados, 
 * com filtros, ordenamento, e paginação
 */
veiculosService.buscarVeiculos = ({ query, orderBy, limit, page}) => {
    return Veiculo.lucisApiQuery({ query, orderBy, limit, page});
};

/**
 * Cria uma nova Veiculo no sistema
 */
veiculosService.criarVeiculo = (novoVeiculo)=>{
    const veiculo = new Veiculo(novoVeiculo);

    const validacao = veiculo.validateSync();

    if (validacao){
        const erro = Object.values(validacao.errors)[0];
        return Promise.reject(erro.message);
    }

    return veiculo.save();
};

/**
 * Recupera os dados de uma Veiculo específica
 */
veiculosService.recuperarVeiculo = (veiculoId)=>{
    return Veiculo.findById(veiculoId);
};

/**
 * Atualiza os dados de um Veiculo na base de dados
 * 
 * @param {*String} veiculoId 
 * @param {Veiculo} novoVeiculo 
 * @returns {Promise} contendo o veiculo atualizado
 */
veiculosService.editarVeiculo = (veiculoId, novoVeiculo)=>{
    return Veiculo.findByIdAndUpdate(veiculoId, novoVeiculo);
};

module.exports = veiculosService;