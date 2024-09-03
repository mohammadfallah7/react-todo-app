const App = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 grid grid-cols-6">
      <div className="col-span-1 border hidden sm:block">Side</div>
      <div className="col-span-6 sm:col-span-5 border">Main</div>
    </div>
  );
};

export default App;
