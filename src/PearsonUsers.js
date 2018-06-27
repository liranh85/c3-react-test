import React, { Component } from "react";

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  render() {
    const { users } = this.state;

    return (
      <div className="pearson-users">
        <h1 className="title">Pearson User Management</h1>
        <div className="user-profiles">
          {
            users.map(user => {
              return (
                <li className="user-profile" key={user.id}>
                  <img className="user-avatar" src={user.avatar} alt="avatar"/>
                  <h2 className="user-full-name">{`${user.first_name} ${user.last_name}`}</h2>
                  <button className="delete-btn">Delete</button>
                </li>
              )
            })
          }
        </div>
      </div>
    );
  }
}
