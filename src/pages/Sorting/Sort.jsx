import React from 'react';
import './Sort.scss';
import {Mcard} from '../../components/cards/makecard';
class Sort extends React.Component {

    render() {
        return(
            <div className="sort-div">
            <div className="sorts-div">
            <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary" onClick={this.props.sort()}>SORT BY NAME</button>
            </div>
            </div>
            <div className="card-list">
                {this.props.monster.map((n,i)=>(<Mcard key={i} index={i} card={n} url={n.Photo} urlindex = {i}/>))}
            </div>
            </div>
        );
    }

}

/*const Sort = ({monster,sort}) => {
    return(
        <div className="sort-div">
        <div className="sorts-div">
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary" onClick={sort()}>SORT BY NAME</button>
        </div>
        </div>
        <div className="card-list">
            {monster.map((n,i)=>(<Mcard key={i} index={i} card={n} url={n.Photo} urlindex = {i}/>))}
        </div>
        </div>
    );
}; */
export default Sort;
