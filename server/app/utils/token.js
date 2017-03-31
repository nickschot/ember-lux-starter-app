import { sign } from 'lux-jwt';

export const expiresIn = 60 * 30;               // 30 minutes
export const expiresInLong = 60 * 60 * 24 * 7;  // 7 days
export const secret = process.env.JWT_SECRET;

export function getNewToken(data, rememberMe = false) {
    return new Promise((resolve, reject) => {
        sign(data, secret, {expiresIn: rememberMe ? expiresInLong : expiresIn}, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}
