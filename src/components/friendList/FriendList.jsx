import PropTypes from "prop-types";
import './friend-list.css';
import FriendListItem from "components/friendListItem/FriendListItem";

const FriendsList = ({ friends }) => {
    const elements = friends.map(friend => <FriendListItem key={friend.id} {...friend}  />);
    return (
        <ul className="friend-list">
  {elements}
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
}


export default FriendsList;