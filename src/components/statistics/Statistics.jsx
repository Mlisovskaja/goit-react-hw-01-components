import PropTypes from "prop-types";
import './statistics.css';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Statistics = ({ title, stats }) => {
  const elements = stats.map(item => <li style={{ backgroundColor: getRandomColor() }} className="statistics__item" key={item.id}>
    <span className="statistics__label">{item.label}</span>
    <span className="statistics__percentage">{item.percentage}%</span>
  </li>);
  
    return (
  <section className="statistics">
  {title && <h2 className="statistics__title">{title}</h2>}
  <ul className="statistics__stat-list">
    {elements}
  </ul>
</section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}

export default Statistics;