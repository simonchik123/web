import React, {useEffect} from 'react';
import Header from '../component/header';
import Navigation from '../component/navigation';

const Favorites = ()=>{
    useEffect(()=>{
        document.title = 'Любимые статьи - Notedly';
    });

    return(
        <div>
            <Header/>
            <Navigation/>
            <p> Это любимые статьи</p>
        </div>
    )
}

export default Favorites;