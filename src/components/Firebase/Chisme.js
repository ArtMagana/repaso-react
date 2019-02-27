import React from 'react';

const Chisme = (props) => {

    return(
        <div className='chisme'>
            <h1>{props.info.titulo}</h1>
            <p>{props.info.chisme}</p>
            <hr/>
        </div>
    )
}

export default Chisme;