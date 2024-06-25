import React, { useEffect, useCallback, useState } from "react";
import useSound from "use-sound";

const Reproducir = ({ audio }) => {
  //const [play, { stop }] = useSound(audio);
  const [playAudio, setPlayAudio] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [play, { stop }] = useSound(audio, {
    volume: 0.5,
    playbackRate: 1,
  });

  useEffect(() => {
    console.log(playAudio);
    console.log(audioPlaying);
    if (playAudio && !audioPlaying) {
      stop();
      //play();
      setAudioPlaying(true);
    }
  }, [audio]);

  useEffect(() => {
    setPlayAudio(true);
    play();
    setAudioPlaying(false);
  }, [audioPlaying]);

  return <></>;
};

export default Reproducir;
