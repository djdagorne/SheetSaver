import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorNotice(props) {
  const { message, clearError } = props;
  return (
    <div className="error-notice">
      <span>{message}</span>
      <button type="button" onClick={clearError}>&times;</button>
    </div>
  );
}

ErrorNotice.propTypes = {
  message: PropTypes.string.isRequired,
  clearError: PropTypes.func.isRequired,
};
