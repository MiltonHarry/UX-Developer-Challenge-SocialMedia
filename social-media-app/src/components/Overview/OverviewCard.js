import { Row, Col } from "react-bootstrap";
import Card from '../UI/Card';

function OverviewCard(props) {

    return (
        <Card className="overview-items">
            <Row>
                <Col><div className="overview-label">{props.name}</div></Col>
                <Col className="right-content"><div>{props.icon}</div></Col>
            </Row>
            <Row>
                <Col><div className="overview-total">{props.total}</div></Col>
                <Col className="right-content"><p className={props.activity === "true" ? "added" : "removed"}>{props.icon} {props.stats}%</p></Col>
            </Row>
        </Card>

    );
}

export default OverviewCard;