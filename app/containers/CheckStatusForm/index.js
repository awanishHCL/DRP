import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import styled from 'styled-components';
import Div from 'components/Div';
import Text from 'components/Text';
import Hr from 'components/Hr';
import Button from 'components/Button';
import { Field, LocalForm, Errors } from 'react-redux-form';
import { NavLink } from 'react-router-dom';
import messages from './messages';
import reducer from './reducer';
import { makeSelectImei, makeSelectUnlockNumber } from './selectors';
import { changeStateValue, checkUnlockStatus } from './actions';


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

class CheckStatusForm extends React.Component {
  render() {
    return (
      <LocalForm className="checkunlockformsec" onSubmit={this.props.onSubmitForm}>
        <UnlockCustomerNameBox>
          <UnlockFormGroup>
            <Div className="imeiportalsec">
              <Field model=".imei" validators={{ isRequired, maxLength, minLength, isNumber }}>
                <UnlockTextBoxLabel><FormattedMessage {...messages.label1} /></UnlockTextBoxLabel>
                <input className="UnlockTextBox" type="text" value={this.props.imei} name="imei" onChange={this.props.onChangeStateValue} placeholder="Ex:12345678901234"></input>
                <Errors wrapper="span" show={{ touched: true, focus: false }} model=".imei" messages={{ isRequired: 'Enter an IMEI number.', maxLength: 'Enter a valid 15-digit IMEI number.', minLength: 'Enter a valid 15-digit IMEI number.', isNumber: 'Enter a valid IMEI number.' }} className="UnlockTextErrors" />
              </Field> 			</Div>
            <Div className="txtsec" width="90%"><Text fontsize="12px"><FormattedMessage {...messages.label1Help} /></Text></Div>
          </UnlockFormGroup>
        </UnlockCustomerNameBox>
        <UnlockCustomerNameBox>
          <UnlockFormGroup>
            <Div className="unlocknumbersec">
              <Field model=".unlocknumber" validators={{ isRequired, isNumber }}>
                <UnlockTextBoxLabel><FormattedMessage {...messages.label2} /></UnlockTextBoxLabel>
                <input className="UnlockTextBox" type="text" value={this.props.unlocknumber} name="unlocknumber" onChange={this.props.onChangeStateValue} placeholder="Ex:12345678901234"></input>
                <Errors wrapper="span" show={{ touched: true, focus: false }} model=".unlocknumber" messages={{ isRequired: 'Enter your request number.', isNumber: 'Enter a valid Request number.' }} className="UnlockTextErrors" />
              </Field>
            </Div>
          </UnlockFormGroup>
        </UnlockCustomerNameBox>
        <Div paddingtop="60px"><Hr></Hr></Div>
        <Div paddingtop="60px">
          <UnlockButtonContainer>
            <Button primary="true" type="submit"><FormattedMessage {...messages.submitButton} /></Button>
            <NavLink to="/"><Button secondary="true"><FormattedMessage {...messages.backButton} /></Button></NavLink>
          </UnlockButtonContainer>
        </Div>
      </LocalForm>
    );
  }
}


CheckStatusForm.propTypes = {
  imei: PropTypes.string,
  unlocknumber: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeStateValue: PropTypes.func,
};


export function mapDispatchToProps(dispatch) {
  return {
    onChangeStateValue: (evt) => dispatch(changeStateValue(evt.target.name, evt.target.value)),
    onSubmitForm: (evt) => {
      dispatch(checkUnlockStatus(evt));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  imei: makeSelectImei(),
  unlocknumber: makeSelectUnlockNumber(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'checkStatus', reducer });
export default compose(
  withReducer,
  withConnect,
)(CheckStatusForm);

