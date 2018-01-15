/*
 * CheckStatus Messages
 *
 * This contains all the text for the CheckStatus component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.CheckStatus.header',
    defaultMessage: 'Check your unlock status',
  },
  text: {
    id: 'app.containers.CheckStatus.text',
    defaultMessage: 'Enter your IMEI and the unlock confirmation number we emailed you. Check your spam folder if you think you missed our email.',
  },
});
