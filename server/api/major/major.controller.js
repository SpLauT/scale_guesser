import Major from './major.model';

const respondWithResult = (res, statusCode) => {
    statusCode = statusCode || 200;

    return entity => {
        if (entity) {
            return res.status(statusCode).json(entity);
        }

        return null;
    }
}

const handleError = (res, statusCode) => {
    statusCode = statusCode || 500;

    return err => {
        res.status(statusCode).send(err);
    };
}

export function index(req, res) {
    Major
        .count()
        .exec((err, count) => {

            if (err) throw err;
            console.log('count', count);
            console.log('number skipped', Math.random() * count);
            const random = Math.floor(Math.random() * count);
            console.log('random', random);

            Major
                .findOne()
                .skip(random)
                .exec()
                .then(respondWithResult(res))
                .catch(handleError);
        });
}
