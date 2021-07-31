import Card from '../UI/Card';
function MainTotalCard(props) {

    //Total SocialMedia Cards
    return (
        <Card className={props.socialMedia}>
            <div className="total-user">
                <i className={props.smIcon} />
                <label>{props.name}</label>
            </div>
            <div className="total-number">{props.total}</div>
            <div className="total-label">{props.label}</div>
            <div className={props.activity === "true" ? "data-percentege added" : "data-percentege removed"}>
                <i className={props.icon} />
                <div>{props.stats} Today</div>
            </div>
        </Card>


    );
}

export default MainTotalCard;