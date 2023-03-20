import React, { FormEvent, useState } from 'react'
import axios from 'axios'

type IdProps = {
    postId: String
}

export default ({ postId }: IdProps) => {
    const [content, setContent] = useState('')
    
    const onSubmit = async (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault()

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        })

        setContent('')
    }

    const contents =
        <div>
            <form onSubmit={onSubmit} className='flex mb-3'>
                <div>
                    <label className='font-sans pl-3'>New Comment :</label>
                    <input className='border border-black bg-yellow-50 mx-3' value={content} onChange={e => setContent(e.target.value)} type="text" />
                </div>
                <button className='bg-yellow-300 px-2 border mx-4 border-black rounded-3xl'>Submit</button>
            </form>
        </div>

    return contents
}
