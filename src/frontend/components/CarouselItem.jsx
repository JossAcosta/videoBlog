import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite } from '../actions';
import { deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';


const CarouselItem = (props) =>{
  const { _id,cover, title, year, contentRating, duration, isList, } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
     _id, cover, title, year, contentRating, duration
    })
  }

  const handleDeleteFavorite = itemId => {
    props.deleteFavorite(
      itemId
    )
  }
    return(
      <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title}  />
      <div className="carousel-item__details">
        <div>
          <Link to={{pathname:`/player/${_id}`,
          state: { source: props.source} }}
          >
            <img 
              className="carousel-item__details--img" 
              src={playIcon} alt="Play Icon" 
            />
          </Link>
          {
            isList ? 
            <img className="carousel-item__details--img" src={removeIcon} alt="Remove Icon" onClick={() => handleDeleteFavorite(_id)}/> 
            :
          <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" onClick={handleSetFavorite}/> 
          }
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
        {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  _id: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number || PropTypes.string,
  contentRating: PropTypes.string,
  // duration: PropTypes.number || PropTypes.string,
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}
export default connect(null, mapDispatchToProps)(CarouselItem);