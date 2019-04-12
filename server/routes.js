import path from 'path';

export default app => {

    app.route('/:url(api|auth|components|app|asset)/*')
    .get((req,res) => {
        res.end('Nothing found');
    });

    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.resolve(`${app.get('assetPath')}/index.html`))
        });
}