import PropTypes from 'prop-types';
import './profile.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="profile__description">
        <img src={avatar} alt={username} className="profile__avatar" />
        <p className="profile__name">{username}</p>
        <p className="profile__tag">{tag}</p>
        <p className="profile__location">{location}</p>
      </div>

      <ul className="profile__stats">
        <li className="profile__stats-item">
          <span className="profile__label">Followers</span>
          <span className="profile__quantity">{stats.followers}</span>
        </li>
        <li className="profile__stats-item">
          <span className="profile__label">Views</span>
          <span className="profile__quantity">{stats.views}</span>
        </li>
        <li className="profile__stats-item">
          <span className="profile__label">Likes</span>
          <span className="profile__quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
