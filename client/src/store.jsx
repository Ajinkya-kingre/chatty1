// import { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   const storeTokenInLS = (serverToken) => {
//     setToken(serverToken);
//     return localStorage.setItem("token", serverToken);
//   };
//   let isLoggedIn = !!token;
//   console.log("is loggedin", isLoggedIn);

//   const logOutUser = () => {
//     setToken("");
//     return localStorage.removeItem("token");
//   };
//   return (
//     <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logOutUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// export const useAuth = () => {
//   return useContext(AuthContext);
// };
