import { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios'

export default () => {
    const [title, setTitle] = useState('')

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await axios.post('http://localhost:4000/posts', {
            title
        })

        setTitle('')
    }   

    const content =
        <div className=''>
            <form onSubmit={onSubmit} className="flex">
                <div>
                    <label className='text-2xl p-3 '>Title</label>
                    <input className='border border-black bg-yellow-50' value={title} 
                    onChange={(e) => setTitle(e.target.value)} type="text" />
                </div>
                <button className='bg-yellow-300 p-1 px-4 border mx-4 border-black rounded-3xl'>Submit</button>
            </form>
        </div>

    return content
}
