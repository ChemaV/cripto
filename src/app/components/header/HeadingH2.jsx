import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types"; // Import PropTypes
import { pagetitles } from "../../constants";

const HeadingH2 = ({ pageName }) => {
  const { headingH2 } = pagetitles[pageName] || {};

  if (!headingH2) {
    return null;
  }

  return (
    <Heading className="headingh2" as='h2' size='md' noOfLines={2} m="0">
      {headingH2}
    </Heading>
  );
}

// Add prop validations
HeadingH2.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default HeadingH2
