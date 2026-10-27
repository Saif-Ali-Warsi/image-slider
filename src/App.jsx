import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"];

  return (
    <>
      <h3>Image slider</h3>

      <div>
        <button>Previuos</button>
        <img src={images[currentIndex]} alt="image" />
        <button>Next</button>
      </div>
    </>
  );
}

export default App;
