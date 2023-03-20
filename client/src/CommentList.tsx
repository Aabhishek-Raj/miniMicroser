type Comment = {
    id: String,
    content: string,
    status: String
}
 

interface Post {
    id: string,
    title: string
    comments: Comment[]
}

export default ({ comments }: Post) => {

    const renderedComments = comments.map(comment => {
        let userComment

        if(comment.status === 'approved') {
            userComment = comment.content
        }

        if(comment.status === 'pending') {
            userComment = 'This comment is awaiting moderation'
        }

        if(comment.status === 'rejected') {
            userComment = 'This comment has been rejected'
        }


        return <li className='font-serif text-red-600' key={comment.id.toString()}>🍀{userComment}</li>
    })

    const content =
        <ul>
            {renderedComments}
        </ul>

    return content  
}
