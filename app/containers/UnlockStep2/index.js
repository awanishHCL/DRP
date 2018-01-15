import React from 'react';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import CenterDiv from 'components/CenterDiv';
import Div from 'components/Div';
import Header2 from 'components/Header2';
import StepIndicator from 'components/StepIndicator';
import StepListItem from 'components/StepListItem';
import StepItemText from 'components/StepItemText';
import StepList from 'components/StepList';
import CustomerForm from 'containers/CustomerForm';
import messages from './messages';

const UnlockWrapper = styled.div`
margin: 0 auto;
width: 1024px;
`;

export class UnlockStep2 extends React.PureComponent {
  render() {
    return (
      <UnlockWrapper>
        <Div paddingtop="80px">
          <Header2 >Device unlock portal</Header2 >
        </Div>
        <CenterDiv>
          <StepIndicator>
            <StepList>
              <StepListItem stepon="true"><StepItemText>1. Enter your wireless number</StepItemText></StepListItem>
              <StepListItem stepon="true"><StepItemText>2. Account information</StepItemText></StepListItem>
              <StepListItem><StepItemText>3. Confirmation</StepItemText></StepListItem>
            </StepList>
          </StepIndicator>
        </CenterDiv>
        <CenterDiv>
          <CustomerForm></CustomerForm>
        </CenterDiv>
      </UnlockWrapper>
    );
  }
}

export default compose()(UnlockStep2);
