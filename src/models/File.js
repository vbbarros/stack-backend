const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true
    }
},{
    timestamps: true, //cria as colunas created_at e updated_at
    toObject: {virtuals: true}, //toda vez q for transformado em objeto vai chamar a funcao para montar a url 
    toJSON: {virtuals: true} //toda vez q for transformado em jSON vai chamar a funcao para montar a url 
});

File.virtual("url").get(function(){
    return `http://localhost:3333/files/${encodeURIComponent(this.path)}`;
});
module.exports = mongoose.model("File", File);