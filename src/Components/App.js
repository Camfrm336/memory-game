import { useState } from "react";
import "./App.css";
import Header from "./Header";
import ImageGrid from "./ImageGrid";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <ImageGrid
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
}

export default App;
