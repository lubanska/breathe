const presetCalm = document.getElementById("presetCalm") as HTMLButtonElement;
const presetEnergy = document.getElementById(
  "presetEnergy"
) as HTMLButtonElement;
const presetSleep = document.getElementById("presetSleep") as HTMLButtonElement;

const setPreset = (elementId: string, presetVal: string) => {
  const el = document.getElementById(elementId) as HTMLInputElement;
  if (el) el.value = presetVal;
  el.dispatchEvent(new Event("input"));
};

if (presetCalm) {
  presetCalm.addEventListener("click", (e) => {
    setPreset("inhale", "4");
    setPreset("inhaleHold", "4");
    setPreset("exhale", "4");
    setPreset("exhaleHold", "4");
  });
}

if (presetEnergy) {
  presetEnergy.addEventListener("click", (e) => {
    setPreset("inhale", "4");
    setPreset("inhaleHold", "1");
    setPreset("exhale", "4");
    setPreset("exhaleHold", "1");
  });
}

if (presetSleep) {
  presetSleep.addEventListener("click", (e) => {
    setPreset("inhale", "4");
    setPreset("inhaleHold", "7");
    setPreset("exhale", "8");
    setPreset("exhaleHold", "6");
  });
}
