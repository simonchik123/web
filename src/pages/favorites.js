import React, {useEffect} from 'react';

const Favorites = ()=>{
    useEffect(()=>{
        document.title = 'Любимые статьи - Notedly';
    });

    return(
        <div>            
            <p> Это любимые статьи</p>
        </div>
    )
}

export default Favorites;