import { Row, Col } from "react-bootstrap";
import Card from '../UI/Card';

function OverviewCard(props) {

    return (
        //Overview-Today Cards
        <Card className="overview-items">
            <Row>
                <Col><div className="label-grey">{props.name}</div></Col>
                <Col className="right-content">
                    <i className={props.smIcon} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="overview-total">{props.total}</div>
                </Col>
                <Col className="right-content">
                    <p className={props.activity === "true" ? "added data-percentege" : "removed data-percentege"}><i className={props.icon} /> {props.stats}%</p>
                </Col>
            </Row>
        </Card>

    );
}

export default OverviewCard;