import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa'

import './Form.css';

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className='form'>
      <input
        onChange={handleChange}
        type='text'
        value={novaTarefa}>
      </input>
      <button type='submit'><FaPlus /></button>
    </form>
  );
}

// Define valores padroes para propriedades nao requeridas
// Form.defaultProps = {
//   novaTarefa: 'Valor Padrao'
// }

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}
