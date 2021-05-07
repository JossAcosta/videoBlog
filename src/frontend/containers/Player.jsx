import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getVideoSource } from "../actions";
import '../assets/styles/components/Player.scss';
import NotFound from "./NotFound";

const Player = (props) => {
  const { _id } = props.match.params;
  const hasPlaying = Object.keys(props.match.params).length > 0;
  useEffect(() => {
    props.getVideoSource(_id);
  }, []);
  const {source} = props.location.state
  return !hasPlaying ? <NotFound /> : (
    <div className="Player">
      {/* <video controls autoPlay> */}
      <iframe width="420" height="315" className="Player"
            src={source}>
      </iframe>
        {/* <source src={source} type="video/mp4" /> */}
        Your browser does not support HTML5 video.
      {/* </video> */}
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  );
}
Player.propTypes = {
  getVideoSource: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);