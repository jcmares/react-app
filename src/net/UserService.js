import { AxiosService, EndPoints } from './AxiosService'

class UserService {

    async login(credentials){
        const response  = await AxiosService.post(EndPoints.login, credentials)
        const data = response.data
        return data
    }

}

export default UserService