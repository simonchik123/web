import React, {useEffect} from 'react';
import Header from '../component/header';
import Navigation from '../component/navigation';

const myNotes = ()=>{
    useEffect(()=>{
        document.title = 'Мои статьи - Notedly';
    });

    return(
        <div>
            <Header/>
            <Navigation/>
            <p> Это мои статьи</p>
        </div>
    )
}

export default myNotes;