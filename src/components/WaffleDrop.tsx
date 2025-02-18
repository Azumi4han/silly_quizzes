import { createSignal, onCleanup, onMount, For } from "solid-js";
import { styled, keyframes } from "solid-styled-components";

interface Waffle {
  readonly id: number;
  readonly x: number;
  readonly y: number;
  readonly tx: string;
  readonly ty: string;
  readonly rotation: string;
}

const waffleFall = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) rotate(var(--rotation));
    opacity: 0;
  }
`;

const WaffleContainer = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;

  @media (max-width: 767px) {
    position: absolute !important;
  }
`;

const WaffleElement = styled("div")`
  position: absolute;
  font-size: 24px;
  animation: ${waffleFall} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  user-select: none;
  will-change: transform, opacity;
`;

export default function WaffleTrail() {
  const [waffles, setWaffles] = createSignal<Waffle[]>([]);
  let waffleId = 0;
  let lastAdded = 0;

  const getRandomMotion = () => {
    // Little bit math here, don't let it be more than 180 degrees
    const angle = Math.random() * Math.PI;
    const force = 50 + Math.random() * 100;
    return {
      tx: `${Math.cos(angle) * force}px`,
      ty: `${Math.sin(angle) * force}px`,
      rotation: `${Math.random() * 720 - 360}deg`,
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    const now = Date.now();
    if (now - lastAdded < 50) return;

    lastAdded = now;
    const id = ++waffleId;
    const motion = getRandomMotion();

    setWaffles((prev) => [
      ...prev,
      { id, x: e.clientX, y: e.clientY, ...motion },
    ]);

    setTimeout(() => {
      setWaffles((prev) => prev.filter((w) => w.id !== id));
    }, 1200);
  };

  onMount(() => {
    window.addEventListener("mousemove", handleMouseMove);
    onCleanup(() => window.removeEventListener("mousemove", handleMouseMove));
  });

  return (
    <WaffleContainer>
      <For each={waffles()}>
        {(waffle) => (
          <WaffleElement
            style={{
              "--tx": waffle.tx,
              "--ty": waffle.ty,
              "--rotation": waffle.rotation,
              left: `${waffle.x}px`,
              top: `${waffle.y}px`,
            }}
          >
            🧇
          </WaffleElement>
        )}
      </For>
    </WaffleContainer>
  );
}
