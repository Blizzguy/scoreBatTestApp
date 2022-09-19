export interface Match {
    title: string,

    competition: string,

    matchviewUrl: string,

    competitionUrl: string,

    thumbnail: string,

    date: Date,

    videos: [
        {
            title: string,
            embed: string
        },
        {
            title: string,
            embed: string
        }
    ]
}
