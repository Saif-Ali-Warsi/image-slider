import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://placehold.co/600x400?text=1",
    "https://placehold.co/600x400?text=2",
    "https://placehold.co/600x400?text=3",
  ];

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
