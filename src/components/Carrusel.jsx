import '../css/components/Carrusel.css';
import Button from '../components/Button';
import ImgAli from '../assets/images/avatar-ali.png';
import ImgAnisha from '../assets/images/avatar-anisha.png';
import ImgRichard from '../assets/images/avatar-richard.png';
import ImgShanai from '../assets/images/avatar-shanai.png';

    const profiles = [
        {
            id: 1,
            image: ImgAli,
            alt: 'Ali Bravo',
            name: 'Ali Bravo',
            quote:
            'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
        },
        {
            id: 2,
            image: ImgAnisha,
            alt: 'Anisha Li',
            name: 'Anisha Li',
            quote:
            'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.',
        },
        {
            id: 3,
            image: ImgRichard,
            alt: 'Richard Watts',
            name: 'Richard Watts',
            quote:
            'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!',
        },
        {
            id: 4,
            image: ImgShanai,
            alt: 'Shanai Gough',
            name: 'Shanai Gough',
            quote:
            'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.',
        },
    ];

const Carrusel = () => {

    return (  
        <div className="container__carrusel">
            <div className="title__carrusel">
                <h4>What they've said</h4>
            </div>
            <div className="carrusel">
                {profiles.map((profile) => (
                    <div className="profile" key={profile}>
                        <img src={profile.image} alt={profile.alt} />
                        <p>
                            {profile.name}
                        </p>
                        <q>
                            {profile.quote}
                        </q>
                    </div>
                ))}
            </div>
            <Button />
        </div>
    );
}
 
export default Carrusel;