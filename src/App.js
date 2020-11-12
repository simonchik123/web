import React from 'react';
import ReactDom from 'react-dom';
import Pages from '/pages'
// import global styles
import GlobalStyle from '/component/GlobalStyle';


const App = ()=>{
    return (
        <div>
            <GlobalStyle/>
            <Pages/>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'));