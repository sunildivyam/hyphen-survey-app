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
}

export default new DataServce();