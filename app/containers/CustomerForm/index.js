import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import styled from 'styled-components';
import Button from 'components/Button';
import Div from 'components/Div';
import Hr from 'components/Hr';
import Radio from 'components/Radio';
import RadioLabel from 'components/RadioLabel';
import Text from 'components/Text';
import { Field, LocalForm, Errors } from 'react-redux-form';
import { NavLink } from 'react-router-dom';
import reducer from './reducer';
import { customerFormSubmit, changeStateValue } from './actions';
import { makeSelectFirstName, makeSelectLastName, makeSelectPasscode, makeSelectEmailId, makeSelectConfirmEmailId } from './selectors';
import messages from './messages';


const UnlockButtonContainer = styled.div`
padding: 30px 20px 80px 0px;
`;
const isRequired = (val) => val && val.length > 0;
const maxLength = (val) => val && val.length <= 32;
const minLength = (val) => val && val.length >= 2;
const isNumber = (val) => !isNaN(Number(val));

const UnlockCustomerNameBox = styled.div`
margin-top: 40px;
border: 0 none;
font-size: 100%;
font-style: normal;
font-weight: normal;
margin: 0;
padding: 0;
vertical-align: baseline;
display: inline-block;
width: 100%;
`;

const UnlockFormGroup = styled.div`
float: left;
width: 50%;
margin-right: -15px;
margin-bottom: 0px !important;
box-sizing: border-box;
display: block;
`;

const UnlockTextBoxLabel = styled.div`
font-family: Omnes-ATT-W02-Medium;
width: 100%;
float: left;
color: #333333;
`;


class CustomerForm extends React.Component {

  render() {
    return (
      	<LocalForm className="accountInfo" onSubmit={this.props.onSubmitForm} validators={{ '': { emailsMatch: (vals) => vals.email === vals.confirmemail } }}>
        <UnlockCustomerNameBox>
          <UnlockFormGroup>
            <Div className="formLabel">
              <Div className="formLabelfield">
                <Field model=".firstname" validators={{ isRequired, validFirstName: (val) => /^[a-zA-Z][a-zA-Z &amp;.,-]*$/i.test(val), maxLength, minLength }}>
                  <UnlockTextBoxLabel><FormattedMessage {...messages.label1} /></UnlockTextBoxLabel>
                  <input type="text" name="firstname" className="UnlockTextBox" placeholder="Ex:Mary" value={this.props.firstname} onChange={this.props.onChangeStateValue}></input>
                  <Errors wrapper="span" show={{ touched: true, focus: false }} model=".firstname" messages={{ isRequired: <FormattedMessage {...messages.ErrorMessages1} />, validFirstName: <FormattedMessage {...messages.ErrorMessages2} />, maxLength: <FormattedMessage {...messages.ErrorMessages3} />, minLength: <FormattedMessage {...messages.ErrorMessages4} /> }} className="UnlockTextErrors" />
                </Field>
              </Div>
              <Div className="formLabelfield">
                <Field model=".lastname" validators={{ isRequired, validLastName: (val) => /^[a-zA-Z][a-zA-Z &amp;.,-]*$/i.test(val), maxLength, minLength }}>
                  <UnlockTextBoxLabel><FormattedMessage {...messages.label2} /></UnlockTextBoxLabel>
                  <input type="text" name="lastname" className="UnlockTextBox" placeholder="Ex:Smith" value={this.props.lastname} onChange={this.props.onChangeStateValue}></input>
                  <Errors wrapper="span" show={{ touched: true, focus: false }} model=".lastname" messages={{ isRequired: <FormattedMessage {...messages.ErrorMessages5} />, validLastName: <FormattedMessage {...messages.ErrorMessages6} />, maxLength: <FormattedMessage {...messages.ErrorMessages7} />, minLength: <FormattedMessage {...messages.ErrorMessages8} /> }} className="UnlockTextErrors" />
                </Field>
              </Div>
            </Div>
            <Div className="formLabel">
              <Div className="formLabelfieldCustomer">
                <Field model=".passcode" validators={{ isRequired, isNumber, minLength, maxLength }}>
                  <UnlockTextBoxLabel><FormattedMessage {...messages.label3} /></UnlockTextBoxLabel>
                  <input type="password" name="passcode" className="UnlockTextBox" onChange={this.props.onChangeStateValue} placeholder="****" value={this.props.passcode} placeholder="****"></input>
                  <Errors wrapper="span" show={{ touched: true, focus: false }} model=".passcode" messages={{ isRequired: <FormattedMessage {...messages.ErrorMessages9} />, isNumber: 'Must be a number.', minLength: <FormattedMessage {...messages.ErrorMessages10} />, maxLength: <FormattedMessage {...messages.ErrorMessages11} /> }} className="UnlockTextErrors" />
                </Field>

                <Div className="forgetpass"><a href="javascript:void(0)"><FormattedMessage {...messages.helper4} /></a></Div>

              </Div>

            </Div>
            <Div className="formLabel">
              <Div className="formLabelfield">
                <Field model=".email" validators={{ isRequired, validEmail: (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val) }}>
                  <UnlockTextBoxLabel><FormattedMessage {...messages.label5} /></UnlockTextBoxLabel>
                  <input type="text" name="email" className="UnlockTextBox" placeholder="Ex:name@gmail.com" value={this.props.email} onChange={this.props.onChangeStateValue}></input>
                  <Errors wrapper="span" show={{ touched: true, focus: false }} model=".email" messages={{ isRequired: <FormattedMessage {...messages.ErrorMessages12} />, validEmail: <FormattedMessage {...messages.ErrorMessages13} /> }} className="UnlockTextErrors" />
                </Field>
                <Div className="forgetpass"><i><FormattedMessage {...messages.ErrorMessages14} /></i></Div>
              </Div>
              <Div className="formLabelfield">
                <Field model=".confirmemail" validators={{ isRequired }}>
                  <UnlockTextBoxLabel><FormattedMessage {...messages.ErrorMessages15} /></UnlockTextBoxLabel>
                  <input type="text" placeholder="Ex:name@gmail.com" name="confirmemail" className="UnlockTextBox" value={this.props.confirmemail} onChange={this.props.onChangeStateValue}></input>
                  <Errors wrapper="span" show={{ touched: true, focus: false }} model=".confirmemail" messages={{ isRequired: <FormattedMessage {...messages.ErrorMessages16} /> }} className="UnlockTextErrors" />
                  <Errors model="" wrapper="span" messages={{ emailsMatch: <FormattedMessage {...messages.ErrorMessages17} /> }} className="UnlockTextErrors" />
                </Field>
              </Div>
            </Div>
          </UnlockFormGroup>

        </UnlockCustomerNameBox>
        <Div><Text bold="true" fontsize="14px"><FormattedMessage {...messages.label6} /></Text></Div>
        <Div paddingtop="30px" >
          <RadioLabel><span><Radio type="radio" name="isMilitaryPersonnel" value="yes" ></Radio><FormattedMessage {...messages.label7} /></span></RadioLabel>
          <RadioLabel><span><Radio type="radio" name="isMilitaryPersonnel" value="yes" ></Radio><FormattedMessage {...messages.label8} /></span></RadioLabel>
        </Div>
        <Div paddingtop="60px"><Hr></Hr></Div>
        <Div paddingtop="60px">
          <UnlockButtonContainer>
            <Button primary="true" type="submit"><FormattedMessage {...messages.submitButton} /></Button>
            <NavLink to="/unlockstep1"><Button secondary="true"><FormattedMessage {...messages.backButton} /></Button></NavLink>
          </UnlockButtonContainer>
        </Div>
      </LocalForm>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeStateValue: (evt) => dispatch(changeStateValue(evt.target.name, evt.target.value)),
    onSubmitForm: (evt) => {
      dispatch(customerFormSubmit(evt));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  firstname: makeSelectFirstName(),
  lastname: makeSelectLastName(),
  passcode: makeSelectPasscode(),
  email: makeSelectEmailId(),
  confirmemail: makeSelectConfirmEmailId(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'customerForm', reducer });
export default compose(
	withReducer,
	withConnect,
)(CustomerForm);

