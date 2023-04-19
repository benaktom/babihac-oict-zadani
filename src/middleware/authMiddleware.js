//implement basic http authentication

export const basicAuthMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const base64Credentials = authHeader.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');
        if (username === 'admin' && password === 'admin') {
            next();
        } else {
            res.status(401).send('Invalid username or password');
        }
    } else {
        res.status(401).send('No authorization header');
    }
}