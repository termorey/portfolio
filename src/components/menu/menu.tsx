import React from "react";
import localStyle from "./style.module.scss"
import {Col, Container, Row} from "react-bootstrap";
import {multiClass} from "../../utils/utils";
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <menu className={multiClass("backdropBlur", localStyle.Menu)}>
            <Container>
                <Row>
                    <Col>
                        <nav>
                            <ul>
                                <li><Link to={"/"}>Главная</Link></li>
                                {/*<li>Обо мне</li>*/}
                                <li><Link to={"contacts"}>Контакты</Link></li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </menu>
    )
}

export default Menu;