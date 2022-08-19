import React from 'react';
import './AgePopUp.css';

const AgePopUp = (props) => {
  const [deny, setDeny] = React.useState(false);
  return (
    <div className="modal-container">
      {!deny && (
        <div className="modal_age">
          <p className="clause">Are you 21 or older?</p>
          <div className="declaration-buttons">
            <button className="agree-button" onClick={props.handleAllow}>
              Yes.
            </button>
            <button className="disagree-button" onClick={() => setDeny(true)}>
              No.
            </button>
          </div>
        </div>
      )}
      {deny && (
        <div className="modal_age">
          <h3 className="clause">You are not old enough!</h3>
        </div>
      )}
    </div>
  );
};
export default AgePopUp;
