import React from 'react'
import PropTypes from 'prop-types';

  


export const FirstApp = ({ 
  title, subtitle = 'la tierra', name  }) => {


  return (
      <>
        <h1>{ title }</h1>
        {/* <code>{ JSON.stringify(newMessage) }</code> */}
        <p>Soy un subtitulo</p>
        <p>{subtitle}</p>
        <p>{name}</p>
      </>
  )
}

FirstApp.propTypes = {
  title : PropTypes.string.isRequired,
  subtitle : PropTypes.string

}
FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'No hay subtitulo',
  name: 'Gustavo Oropeza'
}


