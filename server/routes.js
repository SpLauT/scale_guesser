import path from 'path';
import major from './api/major';

export default app => {

    app.use('/api/major', major);

    app.route('/:url(api|auth|components|app|asset)/*')
    .get((req,res) => {
        res.end('Nothing found');
    });

    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.resolve(`${app.get('assetPath')}/index.html`))
        });
}