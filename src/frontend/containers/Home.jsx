import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';
const Home = ({ myList, trends, originals}) => {
    // const initialState = useInitialState(API);
    return (
       <React.Fragment>
           <Header/>
            <Search isHome/>
            {myList.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel> 
                        {myList?.map(item =>
                            <CarouselItem 
                                key={item._id} 
                                {...item}
                                isList
                            />
                        )}
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {trends?.map(item =>
                        <CarouselItem key={item._id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales">
                <Carousel>
                    {originals?.map(item =>
                        <CarouselItem key={item._id} {...item}/>
                    )}
                </Carousel>
            </Categories>
        </React.Fragment>
    )
}
const mapStateToProps = state => {
    return{
        id: state.number,
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    }
}
export default connect(mapStateToProps, null)(Home);