import React from 'react';
import './player.scss';
//import CustomButton from '../custom-button/custom-button.component'
export const Mcard = ({card,index,click = null,url}) =>{
    return(
        <div key={index} className="fut-player-card">
        <div className="player-card-top">
            <div className="player-master-info">
    <div className="player-rating"><span>{card[ `Overall`]}</span></div>
    <div className="player-position"><span>{card[ `Position`]}</span></div>
                <div className="player-nation"><img src={card[ `Flag`]} alt={card[`Nationality`]} draggable="false" /></div>
                <div className="player-club"><img src={card[ `Club Logo`]} alt={card[ `Club`]} draggable="false" /></div>
            </div>
            <div className="player-picture"><img src={card[ `Photo`]} alt="Messi" draggable="false" />
                <div className="player-extra"><span>4*SM</span><span>4*WF</span></div>
            </div>
        </div>
        <div className="player-card-bottom">
            <div className="player-info">
    <div className="player-name"><span>{card[ `Name`]}</span></div>
                <div className="player-features">
                    <div className="player-features-col"><span>
                        <div className="player-feature-value"> {card[ `Curve`]} </div>
                        <div className="player-feature-title">CUR</div></span>
                        <span><div className="player-feature-value">   {card[ `LongShots`]} </div>
                        <div className="player-feature-title">SHO</div></span><span><div className="player-feature-value"> {card[ `LongPassing`]} </div>
                        <div className="player-feature-title">PAS</div></span>
                        </div>
                    <div
                        className="player-features-col"><span><div className="player-feature-value">   {card[ `Dribbling`]} </div>
                        <div className="player-feature-title">DRI</div>
                        </span><span><div className="player-feature-value"> {card[ `Marking`]} </div>
                        <div className="player-feature-title">DEF</div></span>
                        <span><div className="player-feature-value">   {card[ `Stamina`]} </div>
                        <div className="player-feature-title">PHY</div></span></div>
            </div>
        </div>
    </div>
</div>
    )       
}














/*import React from 'react';
import './container.css';
import CustomButton from '../custom-button/custom-button.component'
export const Mcard = ({card,index,click = null,url}) =>{
    return(
        <div  key ={card.id} className="card-container">
            <img alt={`${card.ID}`} src={`${url}`} height={180} width={180}/>
            <h1  key={card.ID}>{card.Name}</h1>
            {click ? (<CustomButton click={()=>click(index)} />):(console.log('Nothing') )}
        </div>
    )       
} */