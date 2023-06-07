export interface ContentTypes {
    contentRendered?: string
    fields?: {
        content?: string,
        title?: string
    }
}

export interface IContentFulParams {
    content_type: string
    order: string
}
