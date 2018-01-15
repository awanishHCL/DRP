import React from 'react';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import SecondCustomerForm from 'containers/SecondCustomerForm';
import styled from 'styled-components';
import CenterDiv from 'components/CenterDiv';
import Div from 'components/Div';
import Header2 from 'components/Header2';
import StepIndicator from 'components/StepIndicator';
import StepListItem from 'components/StepListItem';
import StepItemText from 'components/StepItemText';
import StepList from 'components/StepList';
import messages from './messages';

const UnlockWrapper = styled.div`
margin: 0 auto;
width: 1024px;
`;

export class UnlockStep3 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <UnlockWrapper>
        <Div paddingtop="80px">
          <Header2 ><FormattedMessage {...messages.header} /></Header2 >
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
        <SecondCustomerForm></SecondCustomerForm>
      </UnlockWrapper>
    );
  }
}

export default compose()(UnlockStep3);
