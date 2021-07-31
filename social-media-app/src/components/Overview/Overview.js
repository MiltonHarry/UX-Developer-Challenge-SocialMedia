import OverviewCard from './OverviewCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './Overview.css';

//Mock Data
function Overview() {
    const overviewData = [
        {
            name: 'Page Views',
            icon: 'icon icon-up',
            total: 87,
            stats: 3,
            activity: 'true',
            smIcon: 'icon icon-facebook'
        },
        {
            name: 'Likes',
            icon: 'icon icon-down',
            total: 52,
            stats: 2,
            activity: 'false',
            smIcon: 'icon icon-facebook'
        },
        {
            name: 'Likes',
            icon: 'icon icon-up',
            total: 5462,
            stats: 2257,
            activity: 'true',
            smIcon: 'icon icon-instagram'
        },
        {
            name: 'Page Views',
            icon: 'icon icon-up',
            total: '52k',
            stats: 1375,
            activity: 'true',
            smIcon: 'icon icon-instagram'
        },
        {
            name: 'Retweets',
            icon: 'icon icon-up',
            total: 117,
            stats: 303,
            activity: 'true',
            smIcon: 'icon icon-twitter'
        },
        {
            name: 'Likes',
            icon: 'icon icon-up',
            total: 507,
            stats: 553,
            activity: 'true',
            smIcon: 'icon icon-twitter'
        },
        {
            name: 'Likes',
            icon: 'icon icon-down',
            total: 107,
            stats: 19,
            activity: 'false',
            smIcon: 'icon icon-youtube'
        },
        {
            name: 'Total Views',
            icon: 'icon icon-down',
            total: 1407,
            stats: 12,
            activity: 'false',
            smIcon: 'icon icon-youtube'
        },
    ];

    return (
        <Container>
            <h3>Overview-Today</h3>
            <div className="content">
                <OverviewCard
                    name={overviewData[0].name}
                    icon={overviewData[0].icon}
                    total={overviewData[0].total}
                    stats={overviewData[0].stats}
                    activity={overviewData[0].activity}
                    smIcon={overviewData[0].smIcon}>
                </OverviewCard>
                <OverviewCard
                    name={overviewData[1].name}
                    icon={overviewData[1].icon}
                    total={overviewData[1].total}
                    stats={overviewData[1].stats}
                    activity={overviewData[1].activity}
                    smIcon={overviewData[1].smIcon}>
                </OverviewCard>
                <OverviewCard
                    name={overviewData[2].name}
                    icon={overviewData[2].icon}
                    total={overviewData[2].total}
                    stats={overviewData[2].stats}
                    activity={overviewData[2].activity}
                    smIcon={overviewData[2].smIcon}>
                </OverviewCard>
                <OverviewCard
                    name={overviewData[3].name}
                    icon={overviewData[3].icon}
                    total={overviewData[3].total}
                    stats={overviewData[3].stats}
                    activity={overviewData[3].activity}
                    smIcon={overviewData[3].smIcon}>
                </OverviewCard>
                <OverviewCard
                    name={overviewData[4].name}
                    icon={overviewData[4].icon}
                    total={overviewData[4].total}
                    stats={overviewData[4].stats}
                    activity={overviewData[4].activity}
                    smIcon={overviewData[4].smIcon}>
                </OverviewCard>
                <OverviewCard
                    name={overviewData[5].name}
                    icon={overviewData[5].icon}
                    total={overviewData[5].total}
                    stats={overviewData[5].stats}
                    activity={overviewData[5].activity}
                    smIcon={overviewData[5].smIcon}>
                </OverviewCard>
                <OverviewCard
                    name={overviewData[6].name}
                    icon={overviewData[6].icon}
                    total={overviewData[6].total}
                    stats={overviewData[6].stats}
                    activity={overviewData[6].activity}
                    smIcon={overviewData[6].smIcon}>
                </OverviewCard>
                <OverviewCard
                    name={overviewData[7].name}
                    icon={overviewData[7].icon}
                    total={overviewData[7].total}
                    stats={overviewData[7].stats}
                    activity={overviewData[7].activity}
                    smIcon={overviewData[7].smIcon}>
                </OverviewCard>
            </div>
        </Container>

    );
}

export default Overview;