/**
 *
 * UnlockStep3
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import CenterDiv from 'components/CenterDiv';
import Div from 'components/Div';
import Header2 from 'components/Header2';
import Text from 'components/Text';
import messages from './messages';


const UnlockWrapper = styled.div`
	margin: 0 auto;
    width: 1024px;
`;


export class UnlockStatusPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <UnlockWrapper>
        <Div paddingtop="30px">
          <Header2 ><FormattedMessage {...messages.header} /></Header2>
        </Div>
        <CenterDiv>
          <Div margintop="20px"><Text><FormattedMessage {...messages.text} /></Text></Div>
        </CenterDiv>
      </UnlockWrapper>
    );
  }
}

/* UnlockStatusPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeImei: (evt) => dispatch(changeImei(evt.target.value)),
    onChangeUnlockNumber: (evt) => dispatch(changeUnlockNumber(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);*/

export default UnlockStatusPage;
