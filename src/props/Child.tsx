interface ChildProps {
  color: string;
  onClick: () => void;
}

// needs some configuration to accept children
export const Child = ({ color }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={() => {}}>Click Me</button>
    </div>
  );
};

// able to accept children out of the box
export const ChildAsFC: React.FC<ChildProps> = ({ color, children }) => {
  return (
    <div>
      <p>{color}</p>
      {children}
    </div>
  );
};
