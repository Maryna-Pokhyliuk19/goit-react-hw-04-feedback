import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = props => {
  const { positivePercentage } = props;
  return (
    <ul className={css.statisticsList}>
      {['Good', 'Neutral', 'Bad', 'Total'].map(option => (
        <li className={css.statisticsItem} key={option}>
          <p>
            {option}: {props[option]}
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
