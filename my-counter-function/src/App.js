// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

import React from "react";
// import { createRoot } from "react-dom/client";
import MyCount from "./MyCount";

const App = () => {
  return (
    <div>
      <MyCount diff="1" />
      <MyCount diff="10" />
    </div>
  );
};

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(<App />);
export default App;
