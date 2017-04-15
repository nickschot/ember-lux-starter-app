import bcrypt from 'bcrypt';

export function testPasswordStrength(password) {
    return password.length >= 8;
}

export function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

export function comparePassword(password, hash) {
    return bcrypt.compare(password, hash);
}
