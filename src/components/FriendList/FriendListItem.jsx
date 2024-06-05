import { Component } from "react";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";

export default class FriendList extends Component {
  static defaultProps = {};
  static propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
      }),
    ),
  };
  render() {
    return (
      <>
        <section className={Styles.section_friend_list}>
          <ul className={Styles.friend_list}>
            {this.props.friends.map((obj) => (
              <FriendListItem
                avatar={obj.avatar}
                name={obj.name}
                isOnline={obj.isOnline}
                key={obj.id}
              />
            ))}
          </ul>
        </section>
      </>
    );
  }
}