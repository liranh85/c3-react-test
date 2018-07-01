import React from 'react';
import PropTypes from 'prop-types';
import PearsonUser from './PearsonUser';

export default function PearsonUsers ({ onClickDelete, users }) {
  return (
    <div className="pearson-users">
      <h1 className="title">Pearson User Management</h1>
      <div className="user-profiles">
        {
          users.map(user => {
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

PearsonUsers.defaultProps = {
  users: []
};

PearsonUsers.propTypes = {
  onClickDelete: PropTypes.func.isRequired,
  users: PropTypes.array
};
