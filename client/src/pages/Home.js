import React from 'react'

import gql from 'graphql-tag'
import {useQuery} from '@apollo/react-hooks'

import {Grid, Loader} from 'semantic-ui-react'

import PostCard from '../components/PostCard'

function Home() {

    const {loading, data: { getPosts: posts } = {} } = useQuery(FETCH_POSTS_QUERY)
    // const content = ''
    const content = loading ? (<Loader active />) : (
        <Grid columns={3}>
            <Grid.Row>
                <h2 className="ui center aligned container">Recent Posts</h2>
            </Grid.Row>
            <Grid.Row>
                {posts && posts.map(post => (
                    <Grid.Column key={post.id}>
                        <PostCard post={post}/>
                    </Grid.Column>
                ))}

            </Grid.Row>
        </Grid>
    )
    return (
        <div>
            {content}
        </div>
    )
}


const FETCH_POSTS_QUERY = gql`
query{
    getPosts{
        id body createdAt username likesCount
        likes {
            username
        }
        commentsCount
        comments {
            username
            body
            createdAt
        }
    }
}
`

export default Home;