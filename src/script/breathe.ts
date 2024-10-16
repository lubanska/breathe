const myButton = document.getElementById("myButton");
const breatheBox = document.getElementById("breatheBox");

let myAnimation: Animation;
let a: number;
let b: number;
let c: number;
let d: number;

const myKeyframe: Keyframe[] = [
  { transform: "scale(1)" },
  { transform: "scale(2)" },
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
    breatheCycle();
  });
}

const delay = (s: number) =>
  new Promise((resolve) => setTimeout(resolve, s * 1000));

const updateValue = (elementId: string): number => {
  const el = document.getElementById(elementId);
  return el ? parseInt((el as HTMLInputElement).value) : 0;
};

const updateTimes = () => {
  a = updateValue("inhale");
  b = updateValue("inhaleHold");
  c = updateValue("exhale");
  d = updateValue("exhaleHold");
};

const breatheCycle = async () => {
  updateTimes();

  const breatheIn = 1 / a;
  const breatheOut = 1 / c;

  // Step 1: Play animation forward for 'a' duration
  myAnimation.currentTime = 0;
  myAnimation.playbackRate = breatheIn;
  myAnimation.play();
  await delay(a);

  // Step 2: Pause for 'b' duration
  myAnimation.pause();
  await delay(b);

  // Step 3: Play animation in reverse for 'c' duration
  myAnimation.playbackRate = -breatheOut;
  myAnimation.play();
  await delay(c);

  // Step 4: Pause for 'd' duration
  myAnimation.pause();
  await delay(d);

  breatheCycle();
};
