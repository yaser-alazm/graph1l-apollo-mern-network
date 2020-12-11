import React from 'react'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'

import {Card,Image,Button} from 'semantic-ui-react'

const likePost = () => {
    console.log('Like button clicked')
}

const commentPost = () => {
    console.log('Comment post ..')
}

function PostCard({post:{id,username,createdAt,body,likesCount,commentsCount, likes, comments}}) {
    return (
        <div>
            <Card fluid style={{marginBottom: 20,}}>
                <Card.Content>
                    <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                    circular
                    />
                    <Card.Header>{username}</Card.Header>
                    <Card.Meta as={Link} to={`/post/${id}`}><Moment fromNow>{createdAt}</Moment></Card.Meta>
                    <Card.Description>{body}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button
                    onClick={likePost}
                    content='Like'
                    icon='heart'
                    color='teal'
                    label={{ as: 'a', basic: true, content: likesCount }}
                    labelPosition='right'
                />
                <Button
                    basic
                    onClick={commentPost}
                    content='Comment'
                    icon='comment'
                    color='blue'
                    label={{ as: 'a', basic: true, content: commentsCount }}
                    labelPosition='right'
                />
                </Card.Content>
            </Card>
        </div>
    )
}

export default PostCard;