import React, { Component } from "react"
import "../styles/formulariocadastro.css"

export class FormularioCadastro extends Component {

    constructor (props) {
        super(props);
        this.titulo =" ";
        this.texto =" ";
    }

    _handleMudancaTitulo(evento){ //métodos para guardar as informações com o evento de onChange. Ao mudar o formulário vou guarda essa informação em título
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(evento){ // _ usado para deixar privado os métodos
        this.texto = evento.target.value; 
    }

    _criarNota(evento){ // usado para guardar as informações de inseridas com o evento onSubmit
        evento.preventDefault(); //Ao apertar o botão de Criar Nota não irá recarregar a página
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <input type="text" 
                        placeholder="Titulo"
                        className="form-cadastro-input"
                        onChange={this._handleMudancaTitulo.bind(this)}
                /> 
                <textarea 
                    rows={15}
                    placeholder="Escreva sua nota" 
                    className="form-cadastro-input"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro-input form-cadastro-submit">
                    Criar Nota
                </button>
          </form>
        );
    }
}