/*
 * CheckStatusForm Messages
 *
 * This contains all the text for the CheckStatus component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  label1: {
    id: 'app.containers.CheckStatusForm.label1',
    defaultMessage: 'IMEI',
  },
  label1Help: {
    id: 'app.containers.CheckStatusForm.label1Help',
    defaultMessage: 'Dial *#06# on your phone to find your IMEI.',
  },
  placeholder: {
    id: 'app.containers.CheckStatusForm.placeholder',
    defaultMessage: 'Ex:12345678901234',
  },
  label2: {
    id: 'app.containers.CheckStatusForm.label2',
    defaultMessage: 'Request Number',
  },
  submitButton: {
    id: 'app.containers.CheckStatusForm.submitButton',
    defaultMessage: 'Submit',
  },
  backButton: {
    id: 'app.containers.CheckStatusForm.backButton',
    defaultMessage: 'Back',
  },
});
