import React, { useRef, useEffect } from "react";

// const Toggler = ({ toggle, onToggle }) => {
//   const didMount = useRef(false);

//   useEffect(() => {
//     if (didMount.current) {
//       console.log("I run only if toggle changes.");
//     } else {
//       didMount.current = true;
//     }
//   }, [toggle]);

//   return (
//     <div>
//       <button type="button" onClick={onToggle}>
//         Toggle
//       </button>
//       {toggle && <div>Hello React</div>}
//     </div>
//   );
// };

// // Ensure this is a default export:

const Toggler = ({ toggle, onToggle }) => {
  React.useEffect(() => {
    console.log("I run on every render: mount + update.");
  });

  return (
    <div>
      <button type="button" onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>Hello React</div>}
    </div>
  );
};

// const Toggler = ({ toggle, onToggle }) => {
//   React.useEffect(() => {
//     console.log("I run only on the first render: mount.");
//   }, []);

//   return (
//     <div>
//       <button type="button" onClick={onToggle}>
//         Toggle
//       </button>

//       {toggle && <div>Hello React</div>}
//     </div>
//   );
// };

export default Toggler;
