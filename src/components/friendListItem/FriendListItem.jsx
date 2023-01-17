import PropTypes from "prop-types";
import './friend-list-item.css'


const FriendListItem = ({ isOnline, avatar, name }) => {
    const fullClassName = isOnline ? "friends__item-status online" : "friends__item-status offline";

    return (
        <li className="friends__item">
            <span className={fullClassName}></span>
            <img className="friends__item-avatar" src={avatar} alt={name} width="48" />
            <p className="friends__item-name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
}

export default FriendListItem;