export const FETCH_HOME_DATA = 'fetch_home_data';

export const fetchHomeData = async (dispatch) => {

    const  data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                articles: [
                    {
                        id: 1,
                        title: 'title1',
                        content: 'content1'
                    },
                    {
                        id: 2,
                        title: 'title2',
                        content: 'content2'
                    }
                ]
            })
        },2000)
    })
    dispatch({
        type: FETCH_HOME_DATA,
        payload: data
    })
}