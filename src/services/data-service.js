let instance = null;
class DataServce {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    getSurveyList() {
        const url = process.env.REACT_APP_API_SURVEYLIST;
        return fetch(url)
        .then(res => res.json())
        .then()
        .catch()
    }

    addQuestion(question, survey) {
        const url = `${process.env.REACT_APP_API_SURVEYLIST}/${survey.id}`;
        const surv = {...survey};
        surv.questions.push(question);
        return fetch(url, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(surv)
        })
        .then(res => res.json())
        .then()
        .catch()
    }

    editQuestion(question, survey) {
        const url = `${process.env.REACT_APP_API_SURVEYLIST}/${survey.id}`;
        const surv = {...survey};
        const index = surv.questions.findIndex(q => q.id === question.id);
        if (index >= 0) surv.questions[index] = question;
        return fetch(url, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(surv)
        })
        .then(res => res.json())
        .then()
        .catch()
    }
}

export default new DataServce();