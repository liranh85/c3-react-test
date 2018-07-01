import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import avatarPlaceholder from '../images/avatar-placeholder.png'

export default class PearsonUser extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      avatar: this.props.avatar
    };
  }

  handleAvatarLoadError = () => {
    this.setState({ avatar: avatarPlaceholder })
  }

  render () {
  const { avatar } = this.state;
    const {
      first_name,
      id,
      last_name,
      onClickDelete
    } = this.props;

    return (
      <li className="user-profile" key={id}>
        <img
          className="user-avatar"
          src={avatar}
          alt="avatar"
          onError={this.handleAvatarLoadError}
        />
        <h2 className="user-full-name">{`${first_name} ${last_name}`}</h2>
        <button className="delete-btn" onClick={() => onClickDelete(id)}>Delete</button>
      </li>
    );
  }
}

PearsonUser.defaultProps = {
  avatar: avatarPlaceholder
}

PearsonUser.propTypes = {
  avatar: PropTypes.string,
  first_name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  last_name: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired
};
