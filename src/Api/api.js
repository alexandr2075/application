import * as axios from 'axios';


const instance = axios.create({
    withCredentiale: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '514354dd-7621-43f6-91d9-43268599e37e'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page = ${currentPage} &count = ${pageSize}`)
            .then(response => response.data);
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
   
    getProfile(userId) {
        return instance.get('profile/' + userId)   
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)   
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})   
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

