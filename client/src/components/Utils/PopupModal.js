import React from "react";

export default function PopupModal(props) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) props.hideModal();
  };
  return (
    <div className="popup" onClick={handleBackgroundClick}>
      <div className="popup-inner">
        <button className="popup-inner--close-button" onClick={props.hideModal}>
          Close
        </button>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
