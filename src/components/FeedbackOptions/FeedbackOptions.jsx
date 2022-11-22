import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div
    style={{
      display: 'flex',
      gap: 12,
      marginBottom: 12,
    }}
  >
    {options.map((option, index) => {
      return (
        <button
          key={index}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          style={{
            borderRadius: 4,
            borderColor: 'grey',
            width: 72,
            backgroundColor: '#fff',
            cursor: 'pointer',
          }}
        >
          {option}
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
