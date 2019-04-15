import Major from './../api/major/major.model';
import User from './../api/user/user.model';
import config from './environment';

const seedDatabaseIfNeeded = () => {
    if(!config.seedDB)
        return Promise.resolve();

    const keyImage = 'boof.jpg';

    const majorPromise = Major.find({}).deleteMany()
        .then(() => Major.create({    
            name: 'A♭',
            keyImage: keyImage,
            scale: ['A♭','B♭','C','D♭','E♭','F','G']
        },{
            name: 'A',
            keyImage: keyImage,
            scale: ['A','B','C#','D','E','F#','G#']
        },{
            name: 'B♭',
            keyImage: keyImage,
            scale: ['B♭','C','D','E♭','F','G','A']
        },{
            name: 'B',
            keyImage: keyImage,
            scale: ['B','C#','D#','E','F#','G#','A#']
        },{
            name: 'C',
            keyImage: keyImage,
            scale: ['C','D','E','F','G','A','B']
        },{
            name: 'D♭',
            keyImage: keyImage,
            scale: ['D♭','E♭','F','G♭','A♭','B♭','C']
        },{
            name: 'D',
            keyImage: keyImage,
            scale:  ['D','E','F#','G','A','B','C#']
        },{
            name: 'E♭',
            keyImage: keyImage,
            scale: ['E♭','F','G','A♭','B♭','C','D']
        },{
            name: 'E',
            keyImage: keyImage,
            scale: ['E','F#','G#','A','B','C#','D#']
        },{
            name: 'F',
            keyImage: keyImage,
            scale: ['F','G','A','B♭','C','D','E']
        },{
            name: 'G♭',
            keyImage: keyImage,
            scale: ['G♭','A♭','B♭','C♭','D♭','E♭','F']
        },{
            name: 'G',
            keyImage: keyImage,
            scale: ['G','A','B','C','D','E','F#']
        }))
        .then(() => console.log('Finished populating major scales'))
        .catch(err => console.log('Failed populating major scales', err));


        const userPromise = User.find({}).deleteMany()
            .then(() => User.create({
                username: 'scaleapp',
                email: 'zee email',
                role: 'readWrite',
                password: 'purse',
                provider: 'provid',
                salt: 'salty'
            }))
        
        return Promise.all([majorPromise,userPromise]);

}

export default seedDatabaseIfNeeded;