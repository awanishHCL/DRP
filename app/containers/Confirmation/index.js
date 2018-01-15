import React from 'react';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import styled from 'styled-components';
import CenterDiv from 'components/CenterDiv';
import Div from 'components/Div';
import Header2 from 'components/Header2';
import StepIndicator from 'components/StepIndicator';
import StepListItem from 'components/StepListItem';
import StepItemText from 'components/StepItemText';
import StepList from 'components/StepList';
import Img from 'components/Img';
import Text from 'components/Text';
import myImage from '../../images/checkmark-att.jpg';
import { getOrderStatus } from './actions';
import orderStatusJson from '../../endpoint/confirmation.json';
import messages from './messages';

const UnlockWrapper = styled.div`
	margin: 0 auto;
    width: 1024px;
`;


export class Confirmation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
    this.state = {
      orderId: '',
    };
  }

  componentDidMount() {
    getOrderStatus().then((response) => {
      this.setState({ orderId: orderStatusJson.oceUnlockOrderStatusDO.orderNumber });
    });
  }

  render() {
    return (
      <UnlockWrapper>
        <Div paddingtop="80px">
          <Header2><FormattedMessage {...messages.header} /></Header2>
        </Div>
        <CenterDiv>
          <StepIndicator>
            <StepList>
              <StepListItem stepon="true"><StepItemText>1. Enter your wireless number</StepItemText></StepListItem>
              <StepListItem stepon="true"><StepItemText>2. Account information</StepItemText></StepListItem>
              <StepListItem stepon="true"><StepItemText>3. Confirmation</StepItemText></StepListItem>
            </StepList>
          </StepIndicator>
        </CenterDiv>
        <div className="device-unlock-portal-tks">
          <div className="thkanks-email"> <p><Img src={myImage} alt="checkmark"></Img><Text><FormattedMessage {...messages.text1} /></Text></p></div>

          <ul className="number">
            <li><Text><FormattedMessage {...messages.text2} /></Text></li>
            <li><Text><FormattedMessage {...messages.text3} /></Text></li>
            <li><Text><FormattedMessage {...messages.text4} /><b>{this.state.orderId}</b>. <FormattedMessage {...messages.text5} /></Text></li>
          </ul>

          <p className="warning-email"><Text><FormattedMessage {...messages.text6} /></Text></p>
        </div>

      </UnlockWrapper>
    );
  }
}

export default compose()(Confirmation);
