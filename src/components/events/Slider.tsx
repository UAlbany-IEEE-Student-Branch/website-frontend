import React, { useEffect, useState } from 'react';
import { Events } from '../../models/events';
import fetchEvents from '../../util/fetchEvents';
import placeholder from '../../assets/placeholder/event.jpg';

export const Slider: React.FC = () => {

    const EVENT_LIMIT = 50;

    // simulate componentDidMount(), do axios call
    useEffect(() => {
        (() => {
            try {
                const fetchedEvents = fetchEvents().reverse().slice(0, EVENT_LIMIT);
                setEvents(fetchedEvents);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const [events, setEvents] = useState<Events[]>([]);

    const [x, setX] = useState(0);

    const goLeft: () => void = function (): void {

        // get the styles from the css so that we don't use 'magic numbers' for the margin and width
        const slide = document.querySelector('.slide') as Element;
        const slideStyles: CSSStyleDeclaration = window.getComputedStyle(slide);

        // const browserWidth: number = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

        // +x and parseInt both convert string to integer
        // using slice to get rid of px
        const slideMarginLeft: number = +(slideStyles.getPropertyValue('margin-left').slice(0, -2));
        const slideMarginRight: number = parseInt(slideStyles.getPropertyValue('margin-right').slice(0, -2));        
        
        const slideWidth: number = parseInt(slideStyles.getPropertyValue('min-width'));
        x >= 0 ? setX(-((slideMarginLeft + slideMarginRight) + slideWidth) * (events.length - 1)) : setX(x + ((slideMarginLeft + slideMarginRight) + slideWidth));

        // const slideWidth: number = parseInt(slideStyles.getPropertyValue('min-width')) / 100;
        // x >= 0 ? setX(-((slideMarginLeft + slideMarginRight) + (slideWidth * browserWidth)) * (events.length - 1)) : setX(x + ((slideMarginLeft + slideMarginRight) + (slideWidth * browserWidth)));
    };

    const goRight = function(): void {

        // get the styles from the css so that we don't use 'magic numbers' for the margin and width
        const slide = document.querySelector('.slide') as Element;
        const slideStyles: CSSStyleDeclaration = window.getComputedStyle(slide);

        // const browserWidth: number = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

        // +x and parseInt both convert string to integer
        // using slice to get rid of px
        const slideMarginLeft: number = +(slideStyles.getPropertyValue('margin-left').slice(0, -2));
        const slideMarginRight: number = parseInt(slideStyles.getPropertyValue('margin-right').slice(0, -2));
        
        const slideWidth: number = parseInt(slideStyles.getPropertyValue('min-width'));
        x <= -((slideMarginLeft + slideMarginRight) + slideWidth) * (events.length - 1) ? setX(0) : setX(x - ((slideMarginLeft + slideMarginRight) + slideWidth));

        // const slideWidth: number = parseInt(slideStyles.getPropertyValue('min-width')) / 100;
        // x <= -((slideMarginLeft + slideMarginRight) + (slideWidth * browserWidth)) * (events.length - 1) ? setX(0) : setX(x - ((slideMarginLeft + slideMarginRight) + (slideWidth * browserWidth)));
        
    };

    return (
        <div id="events-component">
            <div id="slider-header">
                <h1>Events</h1>
            </div>
            <div className="highlight"></div>
            <div className="slider">
                {
                    events.map((item, index) => (
                        <div key={index} className="slide" style={{transform: `translateX(${x}px)`}}>
                            <EventComponent 
                                id={item.id}
                                event_name={item.event_name}
                                image={item.image}
                                year={item.year}
                                month={item.month}
                                day={item.day}
                                youtube_url={item.youtube_url}
                            />
                        </div>
                    ))
                }
                <button id="goLeft" onClick={goLeft}></button>
                <button id="goRight" onClick={goRight}></button>
            </div>
        </div>

    );
};

const EventComponent: React.FC<Events> = ({event_name, image, year, month, day, youtube_url}) => {

    function getPlaceholder(event: any) {
        event.target.src = placeholder;
    }

    return (
        <div style={{height: '100%', textAlign: "center"}}>
            <div>
                <img className="event-thumbnail" src={image} alt="slide-img" onError={getPlaceholder}></img>
            </div>
            <div style={{padding: "5%"}}>
                <p>{event_name}</p>
                <p>{month}/{day}/{year}</p>
                {
                    youtube_url
                    ? <a href={youtube_url} target={"_blank"} rel="noreferrer">YouTube</a>
                    : <div></div>
                }
            </div>
        </div>
    );
}
