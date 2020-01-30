import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import ListaNoticias from './components/ListaNoticias'
import Formulario from './components/Formulario'

class App extends Component {
  state = { 
    noticias:[]
   }

  componentDidMount(){
    this.consultarNoticias()
  }

  consultarNoticias = async (categoria = 'general') =>{
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=9fd90c9599e64cfe80d60a65970eb494`
    const respuesta = await fetch(url)
    const noticias = await respuesta.json()
    this.setState({
      noticias : noticias.articles
    })
  }

  render() {
    return (
      <Fragment>
        <Header 
          titulo = 'Noticias React Api'
        />
        <div className="container white contenedor-noticias">
            <Formulario 
              consultarNoticias={this.consultarNoticias}
            />
            <ListaNoticias
                noticias = {this.state.noticias}
            />
        </div>
      </Fragment>
    );
  }
}

export default App;