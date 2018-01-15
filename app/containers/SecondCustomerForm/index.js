import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import styled from 'styled-components';
import CenterDiv from 'components/CenterDiv';
import Text from 'components/Text';
import Button from 'components/Button';
import Div from 'components/Div';
import Hr from 'components/Hr';
import { Field, LocalForm, Errors } from 'react-redux-form';
import { NavLink } from 'react-router-dom';
import { makeSelectImei } from './selectors';
import reducer from './reducer';
import { SecondCustomerFormSubmit, changeStateValue } from './actions';
import messages from './messages';

const UnlockButtonContainer = styled.div`
padding: 30px 20px 80px 0px;
`;

const UnlockCustomerNameBox = styled.div`
margin-top: 40px;
border: 0 none;
font-size: 100%;
font-style: normal;
font-weight: normal;
margin: 0;
padding: 0;
display: block;
`;

const UnlockFormGroup = styled.div`
width: 50%;
margin-right: -15px;
margin-bottom: 0px;
margin-top: 40px;
box-sizing: border-box;
display: block;
`;

const UnlockTextBoxLabel = styled.div`
font-family: Omnes-ATT-W02-Medium;
width: 100%;
float: left;
color: #333333;
`;

const isRequired = (val) => val && val.length > 0;
const maxLength = (val) => val && val.length <= 15;
const minLength = (val) => val && val.length >= 15;
const isNumber = (val) => !isNaN(Number(val));

class SecondCustomerForm extends React.Component {

  render() {
    return (
      <LocalForm onSubmit={this.props.onSubmitForm}>
        <CenterDiv>
          <UnlockCustomerNameBox>
            <UnlockFormGroup>
              <Field model=".imei" validators={{ isRequired, maxLength, minLength, isNumber }}>
                <Div margintop="30px" width="90%"><UnlockTextBoxLabel><FormattedMessage {...messages.label1} /></UnlockTextBoxLabel><input type="text" placeholder="Ex:12345678901234" name="imei" className="UnlockTextBox"></input></Div>
                <Errors wrapper="span" show={{ touched: true, focus: false }} model=".imei" messages={{ isRequired: <FormattedMessage {...messages.ErrorMessages1} />, maxLength: <FormattedMessage {...messages.ErrorMessages2} />, minLength: <FormattedMessage {...messages.ErrorMessages2} />, isNumber: <FormattedMessage {...messages.ErrorMessages3} /> }} className="UnlockTextErrors" />
              </Field>
              <Div className="dialinn" width="90%"><Text fontsize="14px"><FormattedMessage {...messages.helper} /></Text></Div>
            </UnlockFormGroup>
          </UnlockCustomerNameBox>
        </CenterDiv>
        <Div><Hr></Hr></Div>
        <Div className="acctinfotxt"><Text bold="true"><FormattedMessage {...messages.text1} /></Text></Div>
        <Div className="acctinfotxt"><Text><FormattedMessage {...messages.text2} /></Text></Div>
        <Div className="acctinfotxt"><Text><b><FormattedMessage {...messages.text4} />:</b> <FormattedMessage {...messages.text3} /></Text></Div>
        <Div><Hr></Hr></Div>
        <Div className="buttonholder">
          <UnlockButtonContainer>
            <Button primary="true" type="submit">Submit</Button>
            <NavLink to="/unlockstep2"><Button secondary="true">Back</Button></NavLink>
          </UnlockButtonContainer>
        </Div>
      </LocalForm>
    );
  }
}

SecondCustomerForm.propTypes = {
  imei: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeStateValue: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeStateValue: (evt) => dispatch(changeStateValue(evt.target.name, evt.target.value)),
    onSubmitForm: (evt) => {
      dispatch(SecondCustomerFormSubmit(evt));
    },
  };
}
const mapStateToProps = createStructuredSelector({
  imei: makeSelectImei(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'secondCustomerForm', reducer });
export default compose(
	withReducer,
	withConnect,
)(SecondCustomerForm);
