/*
 * UnlockWirelessForm Messages
 *
 * This contains all the text for the confirmation component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Confirmation.header',
    defaultMessage: 'Device unlock portal',
  },
  text1: {
    id: 'app.containers.Confirmation.text1',
    defaultMessage: "Thanks! We're emailing you a link.",
  },
  text2: {
    id: 'app.containers.Confirmation.text2',
    defaultMessage: 'When you get the email, confirm your request within 24 hours.',
  },
  text3: {
    id: 'app.containers.Confirmation.text3',
    defaultMessage: "Check your spam folder if don't see email from us.",
  },
  text4: {
    id: 'app.containers.Confirmation.text4',
    defaultMessage: 'Remember, your request number is ',
  },
  text5: {
    id: 'app.containers.Confirmation.text5',
    defaultMessage: 'Keep it handy in case you need it later.',
  },
  text6: {
    id: 'app.containers.Confirmation.text6',
    defaultMessage: "Be sure to use the link we send you within 24 hours or we'll have to cancel this request.",
  },
});
