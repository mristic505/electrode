import React from "react";
import { Route, Link } from "react-router-dom";
// import { withRouter } from "react-router";

// const NavItem = props => {
//   const { to, exact, strict, children } = props;
//   return (
//     <Route
//       path={to}
//       exact={exact}
//       strict={strict}
//       children={({ location, match }) => {
//         const cn = match ? "active" : null;
//         return (
//           <li className={cn}>
//             <Link to={to}>
//               <div>{children}</div>
//             </Link>
//           </li>
//         );
//       }}
//     />
//   );
// };

const Navigation = () => {
  return (
   <div>KITA</div>
  );
};

const RouterNavigation = Navigation;

export { RouterNavigation as Navigation };
