const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney', {
    useMongoClient: true,
})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é menor que o limite máximo '{MAX}'"
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'"