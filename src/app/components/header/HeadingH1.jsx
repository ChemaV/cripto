import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types"; // Import PropTypes
import { pagetitles } from "../../constants";

const HeadingH1 = ({ pageName }) => {
  const { headingH1 } = pagetitles[pageName] || {};

  if (!headingH1) {
    return null;
  }

  return (
    <Heading className="headingh1" as="h1" noOfLines={2} m="0">
      {headingH1}
    </Heading>
  );
};

// Add prop validations
HeadingH1.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default HeadingH1