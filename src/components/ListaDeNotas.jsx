import React, { Component } from "react"
import { CardNota } from "./CardNota"
import "../styles/listadenotas.css"

export class ListaDeNotas extends Component{

    render() {
        return ( 
            <ul className="lista-notas">
                {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                    return (
                        <li className="lista-notas-item" key={index}>
                            <CardNota />
                        </li>
                    );
                })}
            </ul>
        );
    }    
}