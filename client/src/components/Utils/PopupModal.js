import React from 'react';
import PropTypes from 'prop-types';

export default function PopupModal(props) {
  const { children, hideModal } = props;
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      hideModal();
    }
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="popup" onMouseDown={handleBackgroundClick}>
      <div className="popup-inner">
        <button type="button" className="popup-inner--close-button" onClick={hideModal}>
          Close
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

PopupModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
