import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <div>
      <Child color="red" onClick={() => {}} />
      <ChildAsFC color="red" onClick={() => {}}>
        Hello
      </ChildAsFC>
    </div>
  );
};

export default Parent;
