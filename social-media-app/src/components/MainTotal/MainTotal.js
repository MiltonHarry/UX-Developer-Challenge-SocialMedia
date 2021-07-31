import MainTotalCard from "./MainTotalCard";

import 'bootstrap/dist/css/bootstrap.min.css';
import './MainTotal.css';
import { Container } from "react-bootstrap";

function MainTotal() {

    const mainSocial = [
        {
            icon: 'icon icon-up',
            name: '@nathanf',
            total: 1987,
            stats: 12,
            activity: 'true',
            label: 'Followers',
            socialMedia: 'facebook',
            smIcon: 'icon icon-facebook'
        },
        {
            icon: 'icon icon-up',
            name: '@nathanf',
            total: 1044,
            stats: 99,
            activity: 'true',
            label: 'Followers',
            socialMedia: 'twitter',
            smIcon: 'icon icon-twitter'
        },
        {
            icon: 'icon icon-up',
            name: '@realnathanf',
            total: '11k',
            stats: 1099,
            activity: 'true',
            label: 'Followers',
            socialMedia: 'instagram',
            smIcon: 'icon icon-instagram'

        },
        {
            icon: 'icon icon-down',
            name: 'Nathan F.',
            total: 8239,
            stats: 144,
            activity: 'false',
            label: 'Subscribers',
            socialMedia: 'youtube',
            smIcon: 'icon icon-youtube'
        },

    ];

    return (
        <Container>
            <div className="content">
                <MainTotalCard
                    icon={mainSocial[0].icon}
                    name={mainSocial[0].name}
                    total={mainSocial[0].total}
                    stats={mainSocial[0].stats}
                    activity={mainSocial[0].activity}
                    label={mainSocial[0].label}
                    socialMedia={mainSocial[0].socialMedia}
                    smIcon={mainSocial[0].smIcon}>
                </MainTotalCard>
                <MainTotalCard
                    icon={mainSocial[1].icon}
                    name={mainSocial[1].name}
                    total={mainSocial[1].total}
                    stats={mainSocial[1].stats}
                    activity={mainSocial[1].activity}
                    label={mainSocial[1].label}
                    socialMedia={mainSocial[1].socialMedia}
                    smIcon={mainSocial[1].smIcon}>
                </MainTotalCard>
                <MainTotalCard
                    icon={mainSocial[2].icon}
                    name={mainSocial[2].name}
                    total={mainSocial[2].total}
                    stats={mainSocial[2].stats}
                    activity={mainSocial[2].activity}
                    label={mainSocial[2].label}
                    socialMedia={mainSocial[2].socialMedia}
                    smIcon={mainSocial[2].smIcon}>
                </MainTotalCard>
                <MainTotalCard
                    icon={mainSocial[3].icon}
                    name={mainSocial[3].name}
                    total={mainSocial[3].total}
                    stats={mainSocial[3].stats}
                    activity={mainSocial[3].activity}
                    label={mainSocial[3].label}
                    socialMedia={mainSocial[3].socialMedia}
                    smIcon={mainSocial[3].smIcon}>
                </MainTotalCard>
            </div>
            
        </Container>
    );
}

export default MainTotal;