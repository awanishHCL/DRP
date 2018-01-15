import React from 'react';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import styled from 'styled-components';
import Img from 'components/Img';
import Button from 'components/Button';
import CenterDiv from 'components/CenterDiv';
import Div from 'components/Div';
import Header1 from 'components/Header1';
import Header2 from 'components/Header2';
import Hr from 'components/Hr';
import ImageContainer from 'components/ImageContainer';
import Link from 'components/Link';
import Text from 'components/Text';
import { NavLink } from 'react-router-dom';
import messages from './messages';
import myImage from '../../images/ico-unlock-blue-60x45.png';
import myImageUnlock from '../../images/ico-checkunlock-blue-60x45.png';

const UnlockWrapper = styled.div`
	margin: 0 auto;
    width: 1024px;
`;

const UnlockParentDiv = styled.div`
		display: flex;
		width: 100%;
`;

const UnlockRadioBtnClicked = styled.input`
    background-image: none !important;
    border-radius: 100%;
    border: 1px solid #d2d2d2;
    display: inline-block;
    height: 24px;
    left: 0;
    position: relative;
    margin-right: 10px;
    top: 0;
    width: 24px;
    float: left;
`;


export class UnlockHomePage extends React.PureComponent {

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <UnlockWrapper>
        <Div paddingtop="80px">
          <Header1><FormattedMessage {...messages.header1} /></Header1>
          <div>
            <Div paddingtop="80px">
              <CenterDiv>
                <Text><FormattedMessage {...messages.text1} /></Text>
                <Header2><FormattedMessage {...messages.scaffoldingHeader} /></Header2>
                <Text><FormattedMessage {...messages.text2} /><br />
                  <FormattedMessage {...messages.text3} /><Link fontsize="18px" title="Link opens in a new window" href="javascript:void(0);"><FormattedMessage {...messages.unlockLink} /></Link></Text>
              </CenterDiv>
            </Div>
            <Div paddingtop="60px"><Hr></Hr></Div>
            <Div paddingtop="60px"></Div>
            <UnlockParentDiv>
              <ImageContainer><NavLink to="/unlockstep1"><div><Img src={myImage} alt="Unlock your device"></Img></div><Div paddingtop="10px"></Div></NavLink><NavLink to="/unlockstep1" className="link"><FormattedMessage {...messages.unlockImageLink1} /></NavLink><Div paddingtop="10px"></Div><Text><FormattedMessage {...messages.unlockImageText1} /></Text></ImageContainer>
              <ImageContainer><NavLink to="/checkstatus"><div><Img src={myImageUnlock} alt="Check an unlock status"></Img></div></NavLink><Div paddingtop="10px"></Div><NavLink to="/checkstatus" className="link"><FormattedMessage {...messages.checkStatusImageLink2} /></NavLink><Div paddingtop="10px"></Div><Text><FormattedMessage {...messages.checkStatusImageText2} /></Text></ImageContainer>
            </UnlockParentDiv>
            <Div paddingtop="60px"><Hr></Hr></Div>
            <Div paddingtop="60px">
              <CenterDiv>
                <Header2><FormattedMessage {...messages.header2} /></Header2>
                <div className="col-xs-10 deviceUnlockHelpDescription">
                  <Text><FormattedMessage {...messages.text4} /><Link><FormattedMessage {...messages.unlockLink2} /></Link><FormattedMessage {...messages.text5} /></Text>
                </div>
              </CenterDiv>
            </Div>
            <Div paddingtop="60px"></Div>
            <div>
            </div>
          </div>
        </Div>
      </UnlockWrapper>
    );
  }
}

export default compose()(UnlockHomePage);
