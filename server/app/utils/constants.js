export const TokenConfig = {
    expiresIn:      60 * 30,                // 30 minutes
    expiresInLong:  60 * 60 * 24 * 7,       // 7 days
    secret:         process.env.JWT_SECRET
};