import Main from './pages/Main';

function App() {
  return (
    <div className="wrapper">
      <header className="flex items-center justify-between">
        <div className="font-bold text-4xl leading-tight">
          <span className="text-viridian">JSON</span> Parser
        </div>
        <span className="text-xs text-gray">Developed by: Liza Leheza</span>
      </header>
      <Main />
    </div>
  );
}

export default App;
