export interface ArticleSchema{
    _id: string,
    type: string,
    author: string,
    date: Date,
    key_insights: []
    url: string,
    ratings: []
}
