import Card from '../UI/Card';
function MainTotalCard(props) {

    return (
        <Card className={props.socialMedia}>
            <div className="total-user">
                <div>{props.icon}</div>
                <label>{props.name}</label>
            </div>
            <div className="total-number">{props.total}</div>
            <div className="total-label">{props.label}</div>
            <div className={props.activity === "true" ? "added" : "removed"}>
                <label>{props.icon}</label>
                <div>{props.stats} Today</div>
            </div>
        </Card>


    );
}

export default MainTotalCard;