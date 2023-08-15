export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const loginRequest = () => ({
    type: LOGIN_REQUEST
});


export const loginSuccess = user => ({
    type : LOGIN_SUCCESS, //describes type of action  being performed
    payload : user //holds the data associated with the action
})
export const loginFailure = error => ({
    type : LOGIN_FAILURE,
    payload: error
})


export const loginUser = credentials => async dispatch => {
    

    dispatch(loginRequest());
     try {

        const response = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers:{
                "Content-Type": "application/json"
            }
        });

        if(response.ok){
            const user = await response.json()
            dispatch(loginSuccess(user))
        } else {
            const error = await response.text();
            dispatch(loginFailure(error))
        }
    } catch (error){
        dispatch(loginFailure("An error occurred"))
    }

}
