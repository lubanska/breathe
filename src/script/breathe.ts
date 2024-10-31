const myButton = document.getElementById("myButton") as HTMLButtonElement;
const breatheBox = document.getElementById("breatheBox") as HTMLDivElement;

let shouldStop = true;
let myAnimation: Animation;
let a: number;
let b: number;
let c: number;
let d: number;

const myKeyframe: Keyframe[] = [
  { clipPath: "polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)" },
  {
    clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)",
  },
  {
    clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)",
  },
  {
    clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)",
  },
  {
    clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)",
  },
];

const myTiming: KeyframeAnimationOptions = {
  duration: 1000,
  iterations: 1,
  fill: "both",
};

if (breatheBox) {
  myAnimation = breatheBox.animate(myKeyframe, myTiming);
  myAnimation.pause();
}

if (myButton) {
  myButton.addEventListener("click", (e) => {
    myButton.disabled = true;

    if (shouldStop) {
      myButton.innerText = "Pause";
      startCycle();
      myButton.disabled = false;
    } else {
      stopCycle().then(() => {
        myButton.innerText = "Breathe";
        myButton.disabled = false; // Re-enable button after stopping animation
      });
    }
  });
}

const stopCycle = async () => {
  shouldStop = true;
  myAnimation.pause();
  myAnimation.playbackRate = -1;
  myAnimation.play();
  await delay(1);
  myAnimation.pause();
};

const startCycle = () => {
  shouldStop = false;
  breatheCycle();
};

const breatheCycle = async () => {
  if (shouldStop) return;

  updateTimes();

  const breatheIn = 1 / a;
  const breatheOut = 1 / c;

  // Step 1: Play animation forward for 'a' duration
  myAnimation.currentTime = 0;
  myAnimation.playbackRate = breatheIn;
  myAnimation.play();
  await delay(a);
  if (shouldStop) return;

  // Step 2: Pause for 'b' duration
  myAnimation.pause();
  await delay(b);
  if (shouldStop) return;

  // Step 3: Play animation in reverse for 'c' duration
  myAnimation.playbackRate = -breatheOut;
  myAnimation.play();
  await delay(c);
  if (shouldStop) return;

  // Step 4: Pause for 'd' duration
  myAnimation.pause();
  await delay(d);
  if (shouldStop) return;

  breatheCycle();
};

const delay = (s: number) =>
  new Promise((resolve) => setTimeout(resolve, s * 1000));

const updateValue = (elementId: string): number => {
  const el = document.getElementById(elementId);
  return el ? parseInt((el as HTMLInputElement).value) : 1;
};

const updateTimes = () => {
  a = updateValue("inhale");
  b = updateValue("inhaleHold");
  c = updateValue("exhale");
  d = updateValue("exhaleHold");
};
