import React from 'react';
import styled from 'styled-components';

const UpUserInfo = styled.div`
  background-color: #096fec;
`;
const HeadingMajorSection = styled.h1`
  background-color: #096fec;
  font-size: 50px;
`;

    /* font-family: "font-light", "Omnes-ATT-W02-Light"; */

const post = (props) => (

<UpUserInfo className="upUserInfo">
<div className="span12">
 <div className="container upUserContainer">
 <HeadingMajorSection>Time for something new</HeadingMajorSection>
 <div><span>You're upgrading {props.deviceModel}</span></div>
 <span>{props.ctn}</span>
</div>
</div>
</UpUserInfo>
);

export default post;
