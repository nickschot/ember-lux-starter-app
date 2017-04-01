import { sign } from 'lux-jwt';
import { TokenConfig } from 'app/utils/constants';

export function getNewToken(data, rememberMe = false) {
    return new Promise((resolve, reject) => {
        sign(data, TokenConfig.secret, {
            expiresIn: rememberMe
                ? TokenConfig.expiresInLong
                : TokenConfig.expiresIn},
            (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            }
        );
    });
}
