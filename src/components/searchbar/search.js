import React from 'react';
import './search.scss';
const Searchbar = ({search}) => {
        return (
            <div className="bar">
                <input type="text" className="sbar" onChange = {(event)=>{
                    search(event);
                    
                }
                } />
            </div>
        )
}
export default Searchbar;