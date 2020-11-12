import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import shared layout component
import Layout from '../component/layout';

// import routes
import Home from './home';
import myNotes from './mynotes';
import Favorites from './favorites';

const Pages = ()=>{
    return(
        <Router>
            {/* Wrap our routes within the Layout component */}
            <Layout>
                <Route exact path='/' component={Home}/>
                <Route path='/mynotes' component={myNotes}/>
                <Route path='/favorites' component={Favorites}/>
            </Layout>
        </Router>
    )
}

export default Pages;