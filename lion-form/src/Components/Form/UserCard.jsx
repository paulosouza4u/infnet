import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

export const UserCard = (props) => {

    return (
        <Card style={{ width: '18rem' }}>
            <img alt="Avatar" src={props.user?.avatar}/>
            <CardBody>
                <CardTitle tag="h5">{props.user?.nome}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">{props.user?.profissao}</CardSubtitle>
                <CardText>
                    Idade: {props.user?.idade} <br/>
                    Região: {props.user?.regiao} <br/>
                </CardText>
                <Button color="success"
                        size="sm"
                        outline
                        onClick={props.onClick}>
                    Overview
                </Button>
            </CardBody>
        </Card>
    );
}