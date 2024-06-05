import { Component } from "react";
import PropTypes from "prop-types";
import Styles from "./Stats.module.css";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default class Statistics extends Component {
  static defaultProps = {};
  static propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
      }),
    ),
  };

  render() {
    return (
      <>
        <section className={Styles.section_statistics}>
          <div>
            {this.props.title ? (
              <h2 className={Styles.title}>{this.props.title}</h2>
            ) : (
              false
            )}
            <ul className={Styles.stat_list}>
              {this.props.stats.map((obj) => {
                return (
                  <li
                    key={obj.id}
                    className={Styles.item}
                    style={{ backgroundColor: getRandomHexColor() }}>
                    <span className={Styles.label}>{obj.label}</span>
                    <span className={Styles.percentage}>{obj.percentage}%</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </>
    );
  }
}