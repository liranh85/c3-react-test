import React, { Component } from "react";

export default class PearsonUsers extends Component {

  render() {
    const { onClickDelete, users } = this.props;

    return (
      <div className="pearson-users">
        <h1 className="title">Pearson User Management</h1>
        <div className="user-profiles">
          {
            users && users.map(user => {
              return (
                <li className="user-profile" key={user.id}>
                  <img className="user-avatar" src={user.avatar} alt="avatar"/>
                  <h2 className="user-full-name">{`${user.first_name} ${user.last_name}`}</h2>
                  <button className="delete-btn" onClick={() => onClickDelete(user.id)}>Delete</button>
                </li>
              )
            })
          }
        </div>
      </div>
    );
  }
}
