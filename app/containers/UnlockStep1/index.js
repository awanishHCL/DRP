import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import styled from 'styled-components';
import UnlockWirelessForm from 'containers/UnlockWirelessForm';
import CenterDiv from 'components/CenterDiv';
import Div from 'components/Div';
import Header2 from 'components/Header2';
import Hr from 'components/Hr';
import Link from 'components/Link';
import StepIndicator from 'components/StepIndicator';
import StepListItem from 'components/StepListItem';
import StepItemText from 'components/StepItemText';
import StepList from 'components/StepList';
import Text from 'components/Text';
import messages from './messages';

const UnlockWrapper = styled.div`
margin: 0 auto;
width: 1024px;
`;


export class UnlockStep1 extends React.PureComponent {
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
              <StepListItem><StepItemText>2. Account information</StepItemText></StepListItem>
              <StepListItem><StepItemText>3. Confirmation</StepItemText></StepListItem>
            </StepList>
          </StepIndicator>
        </CenterDiv>
        <Div paddingtop="80px">
          <CenterDiv>
            <Text><FormattedMessage {...messages.text1} /><Link> <FormattedMessage {...messages.text2} /></Link> <FormattedMessage {...messages.text3} /></Text>
            <Div paddingtop="60px"><Hr></Hr></Div>
          </CenterDiv>
        </Div>
        <UnlockWirelessForm />
      </UnlockWrapper>
    );
  }
}

export default compose()(UnlockStep1);

