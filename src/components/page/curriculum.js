import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InformationBox, StyledLeftCol, StyledRightCol } from './styles'
import { faDigitalTachograph, faVoicemail, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Curriculum = React.forwardRef((props, ref) => {

  const skillList = props.info.skills.map((skill, i) =>
    <p>{skill}</p>
  );

  const experienceList = props.info.experience.map((exp, i) => (
    <div key={i}>
      <p>{exp.date} {exp.company_name} {exp.country} {exp.city}</p>
      <p>{exp.position}</p>
      <ul>
        {exp.tasks.map((task, j) => (
          <li key={j}>{task}</li>
        ))}
      </ul>
    </div>
  ));


  const educationList = props.info.education.map((edu, i) =>
    <div>
      <p>{edu.date} - {edu.title}</p>
      <p>{edu.academy}</p>
    </div>
  );
  return (
    <InformationBox ref={ref}>
      <Container fluid className="">
        <Row className="">
          <StyledLeftCol xs={12} md={4}>
            <h4>Marco Casanova - Senior Software Developer</h4>
            <p className='p-0 m-0'> <FontAwesomeIcon icon={faDigitalTachograph} size="1x" /> <span className='ml-2'>https://b-laztornex.github.io/mycv</span></p>
            <p className='p-0 m-0'> <FontAwesomeIcon icon={faVoicemail} size="1x" /> <span className='ml-2'>marco.casanova.de@outlook.com</span></p>
            <p className='p-0 m-0'> <FontAwesomeIcon icon={faMoneyBill} size="1x" /><span className='ml-2'>98K Brutto</span></p>
            <hr />
            <h4>{props.info.translations.skills}</h4>
            <hr />
            <p>
              {skillList}
            </p>
            <h4>{props.info.translations.education}</h4>
            <hr />
            {educationList}
          </StyledLeftCol>
          <Col xs={12} md={8}>
            <Container>
              <Row>
                <StyledRightCol xs={12}>
                  <h4>{props.info.translations.profile}</h4>
                  <hr />
                  <p>
                    {props.info.profile}
                  </p>
                  <h4>{props.info.translations.experience}</h4>
                  <hr />
                  <p>
                    {experienceList}
                  </p>
                </StyledRightCol>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </InformationBox>
  )
})