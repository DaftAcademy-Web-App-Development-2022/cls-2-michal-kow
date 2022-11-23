import React from 'react';
import usePlayer from "~/hooks/usePlayer.hook";
import trackData from "~/data/trackData.json";

import styles from "./Player.module.css";

const Player = () => {
  const { state, actions} = usePlayer()
  return (
    <div className={styles.root}>
      {state.playing ? (
        <button onClick={() => actions.pause()}>pause</button>
      ) : (
        <button onClick={() => actions.play({
          id: trackData.id,
          name: trackData.name,
          src: trackData.preview_url,
          artists: trackData.artists.map(artist => artist.name)
        })}>play</button>
      )}
    </div>
  );
};

export default Player;