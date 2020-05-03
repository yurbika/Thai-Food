import React from "react";

//components
import Background from "../../components/background/background.component";

//styles
import { Container, Content, Info } from "./contact.styles";

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

      <div role="table" aria-label="Business hours">
        <div role="row">
          <span role="rowheader" aria-label="Monday">
            MON
          </span>
          <span role="cell">9:00 A.M. - 10:00 P.M.</span>
        </div>
        <div role="row">
          <span role="rowheader" aria-label="Tuesday">
            TUE
          </span>
          <span role="cell">9:00 A.M. - 10:00 P.M.</span>
        </div>
        <div role="row">
          <span role="rowheader" aria-label="Wednesday">
            WED
          </span>
          <span role="cell">9:00 A.M. - 10:00 P.M.</span>
        </div>
        <div role="row">
          <span role="rowheader" aria-label="Thursday">
            THU
          </span>
          <span role="cell">9:00 A.M. - 10:00 P.M.</span>
        </div>
        <div role="row">
          <span role="rowheader" aria-label="Friday">
            FRI
          </span>
          <span role="cell">9:00 A.M. - 10:00 P.M.</span>
        </div>
        <div role="row">
          <span role="rowheader" aria-label="Saturday">
            SAT
          </span>
          <span role="cell">12:00 A.M. - 10:00 P.M.</span>
        </div>
        <div role="row">
          <span role="rowheader" aria-label="Sunday">
            SUN
          </span>
          <span role="cell">12:00 A.M. - 10:00 P.M.</span>
        </div>
      </div>
    </Content>
  </Container>
);

export default Contact;
