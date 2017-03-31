import { Controller } from 'lux-framework';
import { verify } from 'lux-jwt';
import { comparePassword, hashPassword, testPasswordStrength } from 'app/utils/password';

import User from 'app/models/user';
import { getNewToken, secret } from "../utils/token";

class AuthController extends Controller {
    query = [
        'data'
    ];

    async login({
        params: {
            data: {
                attributes: {
                    identification,
                    password,
                    rememberMe
                }
            }
        }
    }) {

        const user = await User.findByEmail(identification);

        if (user) {
            if(user.password){
                const isAuthenticated = await comparePassword(password, user.password);

                if (isAuthenticated && user) {
                    let data = {
                        userId: user.id
                    };

                    const token = await getNewToken(data, rememberMe);

                    if (token) {
                        return {
                            token: token
                        };
                    }
                }
            } else {
                //TODO: no password has been set, allow for password recovery?
            }
        }

        //Unauthorized
        return 401;
    }

    async tokenRefresh ({
        params: {
            data: {
                attributes: {
                    token
                }
            }
        }
    }) {
        try {
            const oldPayload = verify(token, secret);

            const newToken = await getNewToken({
                userId: oldPayload.userId
            });

            if (newToken) {
                return {
                    token: newToken
                };
            }
        } catch (e) {
            return 401;
        }
    }

    async changePassword({
        user: {
            user
        },
        params: {
            data: {
                attributes: {
                    oldPassword,
                    newPassword
                }
            }
        }
    }){
        let userObj = await User.find(user);

        if(await comparePassword(oldPassword, userObj.password) && testPasswordStrength(newPassword)){
            userObj.password = await hashPassword(newPassword);
            let success = await userObj.save();

            if(success){
                return 204;
            } else {
                return 500;
            }
        } else {
            // old password didn't match or new password not strong enough
            return 422;
        }
    }
}

export default AuthController;
