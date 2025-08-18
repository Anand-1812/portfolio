import { useEffect, useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";

function App() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoading ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
      </div>
    </>
  );
}

export default App
