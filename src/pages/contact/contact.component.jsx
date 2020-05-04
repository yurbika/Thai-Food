import React from "react";

//components
import Background from "../../components/background/background.component";

//assets
import Food from "../../assets/contact.jpg";

//styles
import {
  Container,
  Content,
  Info,
  BHContainer,
  Row,
  RowHeader,
  ImgContainer,
  Wrapper,
} from "./contact.styles";

const Contact = () => (
  <Container>
    <Background className={"background"} />
    <Content>
      <ImgContainer>
        <img src={Food} alt="" />
      </ImgContainer>
      <Wrapper>
        <Info>
          <span tabIndex={0} aria-label="We are Thai Food">
            Thai Food
          </span>
          <span tabIndex={0} aria-label="adress, Cranachstraße 51">
            Cranachstraße 51
          </span>
          <span
            tabIndex={0}
            aria-label="postcode, 31691, federal state, niedersachsen"
          >
            31691 Niedersachsen
          </span>
          <span tabIndex={0} aria-label="Phone number, +49 157 6874 3357">
            +49 157 6874 3357
          </span>
        </Info>

        <BHContainer role="table" tabIndex={0} aria-label="Business hours">
          <Row role="row">
            <RowHeader role="rowheader" tabIndex={0} aria-label="Monday">
              MON
            </RowHeader>
            <span
              role="cell"
              tabIndex={0}
              aria-label="from 9:00 A.M. till 10:00 P.M."
            >
              9:00 A.M. - 10:00 P.M.
            </span>
          </Row>
          <Row role="row">
            <RowHeader role="rowheader" tabIndex={0} aria-label="Tuesday">
              TUE
            </RowHeader>
            <span
              role="cell"
              tabIndex={0}
              aria-label="from 9:00 A.M. till 10:00 P.M."
            >
              9:00 A.M. - 10:00 P.M.
            </span>
          </Row>
          <Row role="row">
            <RowHeader role="rowheader" tabIndex={0} aria-label="Wednesday">
              WED
            </RowHeader>
            <span
              role="cell"
              tabIndex={0}
              aria-label="from 9:00 A.M. till 10:00 P.M."
            >
              9:00 A.M. - 10:00 P.M.
            </span>
          </Row>
          <Row role="row">
            <RowHeader role="rowheader" tabIndex={0} aria-label="Thursday">
              THU
            </RowHeader>
            <span
              role="cell"
              tabIndex={0}
              aria-label="from 9:00 A.M. till 10:00 P.M."
            >
              9:00 A.M. - 10:00 P.M.
            </span>
          </Row>
          <Row role="row">
            <RowHeader role="rowheader" tabIndex={0} aria-label="Friday">
              FRI
            </RowHeader>
            <span
              role="cell"
              tabIndex={0}
              aria-label="from 9:00 A.M. till 10:00 P.M."
            >
              9:00 A.M. - 10:00 P.M.
            </span>
          </Row>
          <Row role="row">
            <RowHeader role="rowheader" tabIndex={0} aria-label="Saturday">
              SAT
            </RowHeader>
            <span
              role="cell"
              tabIndex={0}
              aria-label="from 12:00 A.M. till 10:00 P.M."
            >
              12:00 A.M. - 10:00 P.M.
            </span>
          </Row>
          <Row role="row">
            <RowHeader role="rowheader" tabIndex={0} aria-label="Sunday">
              SUN
            </RowHeader>
            <span
              role="cell"
              tabIndex={0}
              aria-label="from 12:00 A.M. till 10:00 P.M."
            >
              12:00 A.M. - 10:00 P.M.
            </span>
          </Row>
        </BHContainer>
      </Wrapper>
    </Content>
  </Container>
);

export default Contact;
