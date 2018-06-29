import React, { Component } from "react";
import PearsonUser from './PearsonUser';

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
                <PearsonUser
                  {...user}
                  key={user.id}
                  onClickDelete={onClickDelete}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}
