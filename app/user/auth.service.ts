import { Injectable } from '@angular/core'
import { IUserModel } from './user.model'

@Injectable()
export class AuthService {
    currentUser: IUserModel
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Papa'
        }
    }

    isAuthenticated() : boolean {
        return !!this.currentUser
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}