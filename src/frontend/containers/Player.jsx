import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { _id } = props.match.params;
  const [loading, changeLoading] = useState(true);
  const hasPlaying = Object.keys(props.match.params).length > 0;
  useEffect(() => {
    props.getVideoSource(_id);
    changeLoading(false);
  }, []);

  return loading
    ? <h1 />
    :
     hasPlaying ? (
      <div className="Player">
        <video controls autoPlay>
          <source src={props.playing.source} type="video/mp4" />
      Your browser does not support HTML5 video.
        </video>
        <div className="Player-back">
          <button type="button" onClick={() => props.history.goBack()}>
                Regresar
          </button>
        </div>
      </div>
    ) : <Redirect to="/404/" />;
};

const mapStateToProps = (state) => ({
  playing: state.playing,
});

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);