import {useBlogStore} from "~/stores/blogStore";

export const getAllBlogs = async () => {
    const store = useBlogStore()
    if (store.getBlogs.length === 0) {
        await store.fetchBlogs()
    }
    return store.getBlogs
}

export const getSingle = async (slug: string | string[]) => {
    const state = useBlogStore()
    await state.fetchBlog(slug)
    return state.getBlog
}
