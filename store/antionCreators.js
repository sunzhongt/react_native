import {
    USER_LOGIN,
    USERNAME_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_ERROR,
    IMMEDIATELY_LOGIN,
} from './antionType';
import { httpFetch, postBodyProps } from '../Global/Api';
import store from '../store/index';

// 输入账号
export const userNameChange = (userName) => {
    return {
        type: USERNAME_CHANGE,
        userName
    }
};
// 输入密码
export const passWordChange = (passWord) => {
    return {
        type: PASSWORD_CHANGE,
        passWord
    }
};
// 登录失败
export const loginErrorCreator = () => {
    return {
        type: LOGIN_ERROR,
    }
};

// 准备登录
export const immediatelyLoginCreator = () => {
    return {
        type: IMMEDIATELY_LOGIN,
    }
};

export const userLoginAction = () => {
    let PostProps = postBodyProps(store.getState().userInfo);
    return (dispatch) => {
        const action = immediatelyLoginCreator()
        dispatch(action);
        httpFetch(
            'POST',
            'http://94.191.84.187:4567/react_native_orange/login' + PostProps,
            (res) => {
                console.log(res);
                if (res.code == 1) {
                    dispatch({
                        type: USER_LOGIN
                    })
                } else {
                    dispatch(loginErrorCreator());
                }

            },
            (error) => {
                console.log(error);
            }
        )

    }

}