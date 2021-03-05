import React, { Component } from "react"
import "../styles/formulariocadastro.css"

export class FormularioCadastro extends Component {
    render() {
        return (
            <form className="form-cadastro">
                <input type="text" 
                        placeholder="Titulo"
                        className="form-cadastro-input"
                /> 
                <textarea 
                    rows={15}
                    placeholder="Escreva sua nota" 
                    className="form-cadastro-input"
                />
                <button className="form-cadastro-input form-cadastro-submit">
                    Criar Nota
                </button>
          </form>
        );
    }
}