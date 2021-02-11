// import React, { useState } from 'react';

// export const FeedContext = React.createContext();

// const FeedProvider = (props) => {
//   // STATE

//   // Determine if logged in user is donating
//   const [isDonating, setIsDonating] = useState(false);

//   // STATE HANDLERS

//   const isDonatingHandler = (donatingStatus) => {
//     setIsDonating(donatingStatus);
//   };

//   return (
//     <FeedContext.Provider
//       value={{
//         isDonating,
//         isDonatingHandler,
//       }}
//     >
//       {props.children}
//     </FeedContext.Provider>
//   );
// };

// export default FeedProvider;
