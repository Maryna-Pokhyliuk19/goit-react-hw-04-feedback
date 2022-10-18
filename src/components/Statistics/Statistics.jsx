import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ positivePercentage, ...options }) => {
  return (
    <ul className={css.statisticsList}>
      {Object.keys(options).map(option => (
        <li className={css.statisticsItem} key={option}>
          <p>
            {option}: {options[option]}
          </p>
        </li>
      ))}
      <li>
        <p className={css.statisticsPositive}>
          Positive feedback: {positivePercentage}%
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};
