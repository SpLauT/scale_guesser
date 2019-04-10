import path from 'path';

export default app => {

    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.resolve(`${app.get('appPath')}/dist/index.html`))
        });
}