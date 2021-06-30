const EventComponent: React.FC = () => {
  const handleChange = (event: React.InputHTMLAttributes<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default EventComponent;
