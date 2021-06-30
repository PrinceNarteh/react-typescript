import ReactDOM from "react-dom";
import EventComponent from "./events/EventComponent";

const App = () => {
  return (
    <div>
      <h1>Hello, React-TypeScript Union</h1>
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
