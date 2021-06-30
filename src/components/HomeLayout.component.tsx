import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import SideMenu from '../components/SideMenu.component'
import TopMenu from '../components/TopMenu.component'


function HomeLayout({ children }: { children: React.ReactNode }) {

    return (
        <Container style={{ margin: "0", padding: "0" }}>
            <Row className="d-flex d-md-none position-fixed" style={{ margin: "0", padding: "0" }}>
                <TopMenu />
            </Row>
            <Row >
                <Col className="d-none d-md-block position-fixed" md={2} style={{ margin: "0", padding: "0" }}>
                    <SideMenu />
                </Col>
                <Col className="d-none d-md-block" md={1} />
                <Col xs={12} md={9} style={{ marginTop: "70px" }}>
                    <Row>
                        {children}
                    </Row>
                </Col>
                <Col className="d-none d-md-block" md={1} />
            </Row>
        </Container>
    )

}

export default HomeLayout