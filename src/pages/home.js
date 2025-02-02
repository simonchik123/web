import React, {useEffect} from 'react';


// import the required libraries
import { useQuery, gql } from '@apollo/client';

//import Button from '../components/Button';
import NoteFeed from '../component/NoteFeed';

// our GraphQL query, stored as a variable
const GET_NOTES = gql`
    query notefeed($cursor: String){
        noteFeed(cursor: $cursor){
            cursor
            hasNextPage
            notes{
                id
                createdAt      
                content
                favoriteCount
                author{
                    username
                    id
                    avatar
                }
            }
        }
    }
  `

const Home = ()=>{
    // query hook
    useEffect(()=>{
        document.title = 'Notedly';
    });
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
    // if the data is loading, display a loading message
    if (loading) return <p>Loading...</p>;
    // if there is an error fetching the data, display an error message

    if (error) return <p>Error!</p>;
    // if the data is successful, display the data in our UI
    
    return <NoteFeed notes={data.noteFeed.notes} />;
};

export default Home;