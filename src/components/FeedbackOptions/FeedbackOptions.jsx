import PropTypes from 'prop-types';
import { FeedbackBox, Button } from './FeedbackOptions.styles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackBox>
    {options.map((option, index) => {
      return (
        <Button
          key={index}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      );
    })}
  </FeedbackBox>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
