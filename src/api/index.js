import axios from 'axios';

const langId = (lang)=>{
    switch(lang){
        case 'cpp':
            return 53;
        case 'c':
            return 50;
        case 'python':
            return 71;

        default:
            return 53;
    }
}

const optionsSubmit = (lang_id, src_code, src_input)=>{

return {
    method: 'post',
    url: 'https://ide-backend.codingminutes.com/api/judge/run',
    headers: { 
      'Content-Type': 'application/json'
    },
    data: {
        language_id: lang_id,
        source_code: src_code,
        stdin: src_input
    }
    }

};

const optionsGet = (token)=> {

    return {
        method: 'get',
        url: `https://ide-backend.codingminutes.com/api/judge/submissions/${token}`,
        // params: {base64_encoded: 'true', fields: '*'},
        headers: {}
        // 'x-rapidapi-key': process.env.REACT_APP_RAPID_API,
        // 'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
        // }
    }
};
  
export const createSubmission = async (lang, src_code, src_input)=>{
    const resp = await axios.request(optionsSubmit(langId(lang), src_code ,src_input)).then(function (response) {
            return response.data;
        }).catch(function (error) {
            return error;
        })
    return resp;
}

export const getSubmission = async (token)=>{
    const resp = await axios.request(optionsGet(token)).then(function (response) {
            return response.submission_id;
        }).catch(function (error) {
            return error;
        })
    return resp;
}