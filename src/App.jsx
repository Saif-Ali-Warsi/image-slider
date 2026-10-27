import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://placehold.co/1200x300?text=1",
    "https://placehold.co/1200x300?text=2",
    "https://placehold.co/1200x300?text=3",
  ];

  function handleNext() {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  return (
    <>
      <h3>Image slider</h3>

      <div>
        <button>Previuos</button>
        <img src={images[currentIndex]} alt="image" />
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

export default App;
