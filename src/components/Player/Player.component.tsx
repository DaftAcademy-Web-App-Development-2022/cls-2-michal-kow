import React from 'react';
import usePlayer from "~/hooks/usePlayer.hook";
import trackData from "~/data/trackData.json";

import styles from "./Player.module.css";
import {
  PlayIcon, PauseIcon, SpeakerWaveIcon
} from "@heroicons/react/20/solid";

const Player = () => {
  const { state, actions} = usePlayer()
  return (
    <div className={styles.root}>
      {state.playing ? (
        <button onClick={() => actions.pause()}>
          <PauseIcon 
            className={styles.pauseIcon}
            aria-hidden="true"
          />
        </button>
      ) : (
        <button onClick={() => actions.play({
          id: trackData.id,
          name: trackData.name,
          src: trackData.preview_url,
          artists: trackData.artists.map(artist => artist.name)
        })}>
          <PlayIcon 
            className={styles.playIcon}
            aria-hidden="true"
          />
        </button>
      )}
      <div className={styles.timer}>
        <p className={styles.p}>
          {Math.floor((state.currentTime/60)%10)+':'+Math.floor((state.currentTime/10)%10)+''+state.currentTime%10}
        </p>
        <p className={styles.p}> / </p>
        <p className={styles.p}>
          {Math.floor((state.duration/60)%10)+':'+Math.floor((state.duration/10)%10)+''+state.duration%10}
        </p>
      </div>
      <div className={styles.bar}>
        <div className={styles.full}></div>
        <div className={`${styles.current}  w-[${Math.floor(state.currentTime*100/state.duration)}%]`}></div>
      </div>
      <button className={styles.volume}>
        <SpeakerWaveIcon 
          className={styles.speakerIcon}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default Player;