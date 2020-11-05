import React, {useEffect} from 'react';


const myNotes = ()=>{
    useEffect(()=>{
        document.title = 'Мои статьи - Notedly';
    });

    return(
        <div>            
            <p> Это мои статьи</p>
        </div>
    )
}

export default myNotes;