import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section>
    <h2 style={{ marginBottom: 12 }}>{title}</h2>

    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
