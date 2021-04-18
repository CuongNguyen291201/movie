import React, { Component } from 'react';
import './todo.css';

import PropTypes from 'prop-types';

class List extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.listWorks.map((item, index) => (
            <li key={index}>
              <span className={item.done ? `name-work del` : ''}>{item.name_work}</span>
              <button type="button" onClick={() => this.props.delete(item.id_work)}>Delete</button>
              <input type="checkbox" checked={item.done} onChange={() => this.props.check(item.id_work)}/>
            </li>
          ))}
        </ul>
      </>
    )
  }
} 

List.propTypes = {
  listWorks: PropTypes.array,
  delete: PropTypes.func.isRequired,
  check: PropTypes.func.isRequired,

}

export default List;