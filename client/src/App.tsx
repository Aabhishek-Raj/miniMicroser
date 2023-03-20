import PostCreate from './PostCreate'
import PostList from './PostList'

export default () => {

    const content =
        <div className='w-screen h-screen bg-orange-100'>
            <h1 className='text-3xl font-serif p-5'>Create Post</h1>
            <PostCreate />
            <hr className='mt-10'/>
            <hr className='mt-10'/>
            <h1 className='text-2xl font-serif p-4'>Posts</h1>
            <PostList />
        </div>

    return content
}
