function createContext() {
  return new window.AudioContext;
}

export function createAudioSource(source) {
  const context = createContext();
  const sourcMedia = context.createMediaElementSource(source);
  const gain = context.createGain();

  return sourcMedia.connect(gain.connect(context.destination));
}

