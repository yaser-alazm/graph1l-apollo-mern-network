import React from 'react'

import gql from 'graphql-tag'
import {useQuery} from '@apollo/react-hooks'

import {Grid} from 'semantic-ui-react'

import PostCard from '../components/PostCard'

export default function Home() {

    const {loading, data} = useQuery(FETCH_POSTS_QUERY)
    // const content = ''
    const content = loading ? 'loading...' : (
        <Grid columns={3}>
            <Grid.Row>
                <h2 className="ui center aligned container">Recent Posts</h2>
            </Grid.Row>
            <Grid.Row>
                {data.getPosts && data.getPosts.map(post => (
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
