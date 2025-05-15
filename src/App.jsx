import { BrowserRouter } from "react-router-dom";
import MainRoute from "./routes";
import "./index.css"; // Tailwind styles
import "./App.css";   // Your custom styles last for highest precedence


function App() {
  return (
    <>
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
