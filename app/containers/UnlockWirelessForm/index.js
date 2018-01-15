import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import styled from 'styled-components';
import Text from 'components/Text';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import FormContainer from 'components/FormContainer';
import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import CheckBoxLabel from 'components/CheckBoxLabel';
import Div from 'components/Div';
import Hr from 'components/Hr';
import Radio from 'components/Radio';
import RadioLabel from 'components/RadioLabel';
import Link from 'components/Link';
import { Field, LocalForm, Errors } from 'react-redux-form';
import { NavLink } from 'react-router-dom';
import reducer from './reducer';
import { makeSelectAttCustomerType, makeSelectWirelessNumber } from './selectors';
import { changeStateValue, wirelessFormSubmit } from './actions';
import messages from './messages';

const UnlockButtonContainer = styled.div`
    padding: 30px 20px 80px 0px;
`;
const isRequired = (val) => val && val.length > 0;
const maxLength = (val) => val && val.length <= 10;
const minLength = (val) => val && val.length >= 10;
const isNumber = (val) => !isNaN(Number(val));

class UnlockWirelessForm extends React.Component {

  render() {
    return (
      <LocalForm onSubmit={this.props.onSubmitForm}>
        <Div paddingtop="60px">
          <FormContainer>
            <Field model=".attCustomerType">
              <Text bold="true"><FormattedMessage {...messages.text1} /></Text>
              <Div paddingtop="30px">
                <RadioLabel>
                  <span><Radio type="radio" name="attCustomerType" value="yes" checked></Radio><FormattedMessage {...messages.radioLabel1} /></span>
                  <span><Radio type="radio" name="attCustomerType" value="no" ></Radio><FormattedMessage {...messages.radioLabel2} /></span>
                </RadioLabel>
              </Div>
            </Field>
            <Div margintop="40px" marginleft="20px" width="33.3333%">
              <Field model=".wirelessnumber" validators={{ isRequired, maxLength, minLength, isNumber }}>
                <Text bold="true"><FormattedMessage {...messages.label3} /></Text>
                <input type="text" name="wirelessnumber" className="UnlockTextBox" placeholder="Ex:123234C678" ></input>
                <Errors wrapper="span" show={{ touched: true, focus: false }} model=".wirelessnumber" messages={{ isRequired: <FormattedMessage {...messages.errorMessage1} />, maxLength: <FormattedMessage {...messages.errorMessage2} />, minLength: <FormattedMessage {...messages.errorMessage2} />, isNumber: <FormattedMessage {...messages.errorMessage3} /> }} className="UnlockTextErrors" />
              </Field>
              <Text italics="true" fontsize="16px"><FormattedMessage {...messages.text2} /></Text>
            </Div>

            <Div marginleft="20px">
              <CheckBoxLabel>
                <Text><CheckBox type="checkbox"></CheckBox><FormattedMessage {...messages.text3} /><Link><FormattedMessage {...messages.link1} /></Link></Text>
              </CheckBoxLabel>
            </Div>
            <Div paddingtop="60px"><Hr></Hr></Div>
          </FormContainer>
          <Div paddingtop="60px">
            <UnlockButtonContainer>
              <Button primary="true" type="submit">Next</Button>
              <NavLink to="/"><Button secondary="true">Back</Button></NavLink>
            </UnlockButtonContainer>
          </Div>
        </Div>
      </LocalForm>
    );
  }
}

UnlockWirelessForm.propTypes = {
  attcustomertype: PropTypes.string,
  wirelessnumber: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeStateValue: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeStateValue: (evt) => dispatch(changeStateValue(evt.target.name, evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(wirelessFormSubmit(evt));
    },
  };
}
const mapStateToProps = createStructuredSelector({
  attcustomertype: makeSelectAttCustomerType(),
  wirelessnumber: makeSelectWirelessNumber(),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'unlockWirelessForm', reducer });
export default compose(
  withReducer,
  withConnect,
)(UnlockWirelessForm);
