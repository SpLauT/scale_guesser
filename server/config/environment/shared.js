export const env = process.env.NODE_ENV;
export const port = process.env.PORT || 9000;
export const userRoles = ['guest', 'user', 'admin'];

export default {
    env,
    port,
    userRoles
}