import React from "react";
import localStyle from "./style.module.scss"
import {Col, Container, Row} from "react-bootstrap";
import {multiClass} from "../../utils/utils";

const Menu = () => {
    return (
        <menu className={multiClass("backdropBlur", localStyle.Menu)}>
            <Container>
                <Row>
                    <Col>
                        <nav>
                            <ul>
                                <li>Главная</li>
                                <li>Обо мне</li>
                                <li>Контакты</li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </menu>
    )
}

export default Menu;