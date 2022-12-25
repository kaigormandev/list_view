import SCH_LISTS from './constants';

export const requestLists = () => async (dispatch) => {
    dispatch({
        type: SCH_LISTS.LOAD,
    })
    try {
          const json = await fetch("https://data.cityofnewyork.us/resource/s3k6-pzi2.json")
        .then(response => {
            return response.json()
        })
        
        dispatch({
            type: SCH_LISTS.LOAD_SUCCESS,
            schData: json,
        });
    } catch(e) {
        dispatch({
            type: SCH_LISTS.LOAD_SUCCESS,
            schData: [],
        });
    }
};

export const requestDetail = () => async (dispatch) => {
    dispatch({
        type: SCH_LISTS.DETAIL_LOAD,
    })
    try {

        const json = await fetch("https://data.cityofnewyork.us/resource/f9bf-2cp4.json")
        .then(response => {
            return response.json()
        })
        
        dispatch({
            type: SCH_LISTS.DETAIL_SUCCESS,
            detailData: json,
        });
    } catch(e) {
        dispatch({
            type: SCH_LISTS.DETAIL_SUCCESS,
            detailData: [],
        });
    }
}
