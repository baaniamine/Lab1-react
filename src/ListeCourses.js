import PropTypes from 'prop-types';

function ListeCourses({ elements }) {
  return (
    <ul>
      {elements.map((element, index) => (
        <li key={`${element}-${index}`}>{element}</li>
      ))}
    </ul>
  );
}

ListeCourses.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListeCourses;
