import React, { useState } from 'react';

export const FeedContext = React.createContext();

const FeedProvider = (props) => {
  // Determine if logged in user is donating
  const [isDonating, setIsDonating] = useState(false);
  return (
    <FeedContext.Provider
      value={{
        isDonating,
        setIsDonating,
      }}
    >
      {props.children}
    </FeedContext.Provider>
  );
};

export default FeedProvider;
