import React, { useState } from "react";

export const FeedContext = React.createContext();

const FeedProvider = (props) => {
  // STATE

  // Keep track of email of user throughout app for coniditonal queries
  const [donatorStatus, setDonatorStatus] = useState(false);

  // STATE HANDLERS

  const donatorStatusHandler = (donatorStatus) => {
    setDonatorStatus(donatorStatus);
  };

  return (
    <FeedContext.Provider
      value={{
        donatorStatus,
        donatorStatusHandler,
      }}
    >
      {props.children}
    </FeedContext.Provider>
  );
};

export default FeedProvider;
