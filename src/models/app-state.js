export const appState = {
    isLoading: true,
    surveys: [
        {
            id: '', 
            title: '', 
            description: '', 
            active: true, 
            authorId: '',
            questions: [
                {
                    id: '',
                    title: '',
                    description: '',
                    name: '',
                    exclusive: true,
                    answers: [
                        {
                            id: '', 
                            title: '', 
                            correctAnswer: true
                        }
                    ]
                }
            ]
        }
    ],
    selectedSurvey: {
        id: '', 
        title: '', 
        description: '', 
        active: true, 
        authorId: '',
        questions: [
            {
                id: '',
                title: '',
                description: '',
                name: '',
                exclusive: true,
                answers: [
                    {
                        id: '', 
                        title: '', 
                        correctAnswer: true
                    }
                ]
            }
        ]
    },
    questionFormOpened: false
}