import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

type Comment = {
    id: string,
    content: string,
    status: string
}


interface Post {
    id: string,
    title: string
    comments: Comment[]
}

export default () => {
    const [posts, setPosts] = useState<Post | {}>({ })

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts')
        console.log(res.data)
        setPosts(res.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const renderedPost = Object.values(posts).map(post => {
        return <div className='m-5' key={post.id}>
           
            <div className='border border-black shadow-2xl'>
                <h3 className='text-4xl font-serif p-2'>🌸{post.title}</h3>
                <CommentList comments={post.comments}/> 
                <CommentCreate postId={post.id} />
            </div>
        </div>
    })

    const content =
        <div className='grid grid-cols-3'>
            {renderedPost}
        </div>

    return content
}
