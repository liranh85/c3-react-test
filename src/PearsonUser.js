import React, { Component } from "react";

export default class PearsonUser extends Component {

  render() {
    const { avatar, first_name, id, last_name, onClickDelete } = this.props;

    return (
      <li className="user-profile" key={id}>
        <img className="user-avatar" src={avatar} alt="avatar"/>
        <h2 className="user-full-name">{`${first_name} ${last_name}`}</h2>
        <button className="delete-btn" onClick={() => onClickDelete(id)}>Delete</button>
      </li>
    );
  }
}
