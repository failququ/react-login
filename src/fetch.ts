import { TLoginForm } from './types';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const checkInputData = async (data: TLoginForm) => {
    await sleep(2000);
    let userDB = [{
        login: 'steve.jobs@example.com',
        password: 'password',
    }
        ]
    let auth = false
    let ErrorMessage = ''

    userDB.map((user:TLoginForm) => { 
        user.login !== data.login ? ErrorMessage = `Пользователь ${data.login} не найден.`
        : user.password === data.password ? auth = true : ErrorMessage = "Неверный пароль"
    })
    return ({
        logon: auth,
        message: ErrorMessage
    })
}