import bcrypt from 'bcryptjs';

export function testPasswordStrength(password) {
    return password.length >= 8;
}

export function hashPassword(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                reject(err);
            }

            resolve(hash);
        });
    });
}

export function comparePassword(password, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, result) => {
            if (err) {
                reject(err);
            }

            resolve(result);
        });
    });
}
