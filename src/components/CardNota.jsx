import React, { Component } from "react"
import "../styles/cardnota.css"

export class CardNota extends Component{
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota-header">
          <h3 className="card-nota-title">{this.props.titulo}</h3>
        </header>
        <p className="card-nota-text">{this.props.texto}</p>
      </section>
    );
  }
}