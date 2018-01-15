import React from 'react';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import styled from 'styled-components';
import CheckStatusForm from 'containers/CheckStatusForm';
import CenterDiv from 'components/CenterDiv';
import Div from 'components/Div';
import Header2 from 'components/Header2';
import Text from 'components/Text';
import messages from './messages';

const UnlockWrapper = styled.div`
margin: 0 auto;
width: 1024px;
`;

export class CheckStatus extends React.PureComponent {
  render() {
    return (
      <UnlockWrapper>
        <Div paddingtop="30px">
          <Header2 ><FormattedMessage {...messages.header} /></Header2 >
        </Div>
        <CenterDiv>
          <Div margintop="20px"><Text>Enter your IMEI and the unlock <FormattedMessage {...messages.text} /></Text></Div>
          <CheckStatusForm />
        </CenterDiv>
      </UnlockWrapper>
    );
  }
}

export default compose()(CheckStatus);
