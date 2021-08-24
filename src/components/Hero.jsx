import React from 'react'
import './Hero.css'

const Hero = (props) => {
    return <div className="heroesContainer">
        <div className="hero">
            <h2>{props.name}</h2>
            <img className="picture" src={props.image} />
            <div><span className='bold'>Вселенная:</span>  {props.universe}</div>
            <div><span className='bold'>Альтер эго:</span>  {props.alterEgo}</div>
            <div><span className='bold'>Род деятельности:</span>  {props.activity}</div>
            <div><span className='bold'>Друзья:</span>  {props.friends}</div>
            <div><span className='bold'>Суперсилы:</span>  {props.superPowers}</div>
            <div><span className='bold'>Подробнее:</span>  {props.moreInfo}</div>
        </div>
    </div>
}

export default Hero;