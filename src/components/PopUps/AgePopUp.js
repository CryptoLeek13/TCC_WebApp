import React from 'react';
import './AgePopUp.css';

const AgePopUp = (props) => {
  const [deny, setDeny] = React.useState(false);
  return (
    <div className="modal-container">
      {!deny && (
        <div className="modal_age">
          <h3 className="clause">Are you old enough to enter?</h3>
          <div className="declaration-buttons">
            <button className="agree-button" onClick={props.handleAllow}>
              Yes, I am 21 or older.
            </button>
            <button className="disagree-button" onClick={() => setDeny(true)}>
              No, I am not 21 yet.
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
