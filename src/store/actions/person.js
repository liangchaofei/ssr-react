export const FETCH_PERSON_DATA = 'fetch_person_data';

export const fetchPersonData = async (dispatch) => {

    const  data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                userInfo: {
                    username: 'curry',
                    job: '前端工程师'
                }
            })
        },2000)
    })
    dispatch({
        type: FETCH_PERSON_DATA,
        payload: data
    })
}