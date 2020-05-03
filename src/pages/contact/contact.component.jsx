import React from "react";

//components
import Background from "../../components/background/background.component";

//styles
import {
  Container,
  Content,
  Info,
  BHContainer,
  Row,
  RowHeader,
} from "./contact.styles";

const Contact = () => (
  <Container>
    <Background className={"background"} />
    <Content>
      <Info>
        <span>Thai Food</span>
        <span>Cranachstraße 51</span>
        <span>31691 Niedersachsen</span>
        <span>+49 157 6874 3357</span>
      </Info>

      <BHContainer role="table" aria-label="Business hours">
        <Row role="row">
          <RowHeader role="rowheader" aria-label="Monday">
            MON
          </RowHeader>
          <span role="cell">9:00 A.M. - 10:00 P.M.</span>
        </Row>
        <Row role="row">
          <RowHeader role="rowheader" aria-label="Tuesday">
            TUE
          </RowHeader>
          <span role="cell">9:00 A.M. - 10:00 P.M.</span>
        </Row>
        <Row role="row">
          <RowHeader role="rowheader" aria-label="Wednesday">
            WED
          </RowHeader>
          <span role="cell">9:00 A.M. - 10:00 P.M.</span>
        </Row>
        <Row role="row">
          <RowHeader role="rowheader" aria-label="Thursday">
            THU
          </RowHeader>
          <span role="cell">9:00 A.M. - 10:00 P.M.</span>
        </Row>
        <Row role="row">
          <RowHeader role="rowheader" aria-label="Friday">
            FRI
          </RowHeader>
          <span role="cell">9:00 A.M. - 10:00 P.M.</span>
        </Row>
        <Row role="row">
          <RowHeader role="rowheader" aria-label="Saturday">
            SAT
          </RowHeader>
          <span role="cell">12:00 A.M. - 10:00 P.M.</span>
        </Row>
        <Row role="row">
          <RowHeader role="rowheader" aria-label="Sunday">
            SUN
          </RowHeader>
          <span role="cell">12:00 A.M. - 10:00 P.M.</span>
        </Row>
      </BHContainer>
    </Content>
  </Container>
);

export default Contact;
