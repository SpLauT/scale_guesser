import path from 'path';

export default app => {

    app.get('/api', (req, res) => {
        res.send("Hello!");
        res.end();
    })

    app.route('/:url(api|auth|components|app|asset)/*')
    .get((req,res) => {
        res.end('Nothing found');
    });

    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.resolve(`${app.get('assetPath')}/index.html`))
        });
}