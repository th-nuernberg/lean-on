export interface InterviewSchema{
    _id: string,
    type: string,
    interview_conductor: string,
    participant_name: string,
    audio_file_id: string,
    key_insights: [],
    date: Date,
    transcript_external: string,
    ratings: []
}
