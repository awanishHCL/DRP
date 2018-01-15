/*
 * UnlockWirelessForm Messages
 *
 * This contains all the text for the UnlockWirelessForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  label1: {
    id: 'app.containers.secondCustomerForm.label1',
    defaultMessage: 'IMEI',
  },
  helper: {
    id: 'app.containers.secondCustomerForm.helper',
    defaultMessage: 'Dial *#06# on your phone to find your IMEI.',
  },
  text1: {
    id: 'app.containers.secondCustomerForm.text1',
    defaultMessage: "What's next?",
  },
  text2: {
    id: 'app.containers.secondCustomerForm.text2',
    defaultMessage: "We'll send you a link to confirm your unlock request.",
  },
  text3: {
    id: 'app.containers.secondCustomerForm.text3',
    defaultMessage: "Use it within 24 hours or we'll need to cancel your request.",
  },
  text4: {
    id: 'app.containers.secondCustomerForm.text4',
    defaultMessage: 'Note',
  },
  ErrorMessages1: {
    id: 'app.containers.secondCustomerForm.ErrorMessages1',
    defaultMessage: 'Enter an IMEI number.',
  },
  ErrorMessages2: {
    id: 'app.containers.secondCustomerForm.ErrorMessages2',
    defaultMessage: 'Enter a valid 15-digit IMEI number.',
  },
  ErrorMessages3: {
    id: 'app.containers.secondCustomerForm.ErrorMessages3',
    defaultMessage: 'Must be a number.',
  },
});
