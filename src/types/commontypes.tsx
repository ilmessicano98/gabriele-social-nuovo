export interface TPost {
    posts: Post[]
    total: number
    skip: number
    limit: number

}

export interface Post {
    id: number
    title: string
    body: string
}