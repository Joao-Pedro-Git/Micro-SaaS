import { useState, useEffect } from "react";

export default function GoTopButton() {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const scrollHandle = () => {
      const scrollSize = window.scrollY;
      setShowGoTop(scrollSize > 420);
    };

    window.addEventListener("scroll", scrollHandle);

    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  // Função personalizada para rolar para o topo de forma suave
  const goTop = () => {
    let currentPosition = window.scrollY; // Posição atual da rolagem
    const distance = currentPosition; // Distância que a página vai rolar (do topo até a posição atual)
    const duration = 500; // Tempo da animação em milissegundos (quanto maior, mais suave)
    const increment = distance / (duration / 16); // A cada 16ms, o scroll vai aumentar de acordo com a distância

    const scrollInterval = setInterval(() => {
      if (currentPosition > 0) {
        currentPosition -= increment; // Decrementa a posição para rolar para o topo
        window.scrollTo(0, currentPosition); // Atualiza a rolagem da página
      } else {
        clearInterval(scrollInterval); // Quando chegar ao topo, limpa o intervalo
      }
    }, 16); // Atualiza a cada 16ms (aproximadamente 60fps)
  };

  if (!showGoTop) return null;

  return (
    <div
      id="goTop"
      onClick={goTop}
      className="w-10 h-10  right-2 bottom-2 fixed cursor-pointer flex items-center justify-center rounded-full shadow-lg"
    >
      <span>
        ↑
      </span>
    </div>
  );
}
