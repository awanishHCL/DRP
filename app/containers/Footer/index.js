/*
 * FeaturePage
 *
 * List all the features
*/
import React from 'react';
import './footer.css';
import LocaleToggle from 'containers/LocaleToggle';


export default class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="ge5p_global_styles gn-ds2 footer-body">
        <div className="ge5p_z7" id="ge5p_z7">
          <footer>
            <div id="gn-zone5">
              <div id="z5-footer-content" className="container" data-link-position="Footer" data-event-action="linkClick" data-event-code="Link_Click">
                <div className="row">
                  <div id="z5-footer-links" className="span12">
                    <div id="z5-ftr-col1" className="span12-sm span3 span4-md">
                      <div><div className="parbase linkContainer section">
                        <ul className="no-bullet ">
                          <li className="hide-sm hide-xsm">
                            <a href="https://www.att.com/stores/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Find a store&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/stores/&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Find a store" target="_self">
                              <i className="icon-location-pinpoint" aria-hidden="true"></i>
             Find a store
             </a>
                          </li>
                          <li className="hide-lg hide-md">
                            <a href="https://m.att.com/stores/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Find a store&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://m.att.com/stores/&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Find a store" target="_self">
                              <i className="icon-location-pinpoint" aria-hidden="true"></i>
             Find a store
             </a>
                          </li>
                          <li className="hide-sm hide-xsm">
                            <a href="https://www.att.com/storeappointment" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Make a store appointment&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/storeappointment&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Make a store appointment" target="_self">
                              <i className="icon-misc-datetime" aria-hidden="true"></i>
             Make a store appointment
             </a>
                          </li>
                          <li className="hide-lg hide-md">
                            <a href="https://m.att.com/shopmobile/find-a-store/find-a-store-results.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Make a store appointment&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://m.att.com/shopmobile/find-a-store/find-a-store-results.html&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Make a store appointment" target="_self">
                              <i className="icon-misc-datetime" aria-hidden="true"></i>
             Make a store appointment
             </a>
                          </li>
                          <li className="hide-sm hide-xsm">
                            <a href="https://www.att.com/maps/wireless-coverage.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Coverage maps&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/maps/wireless-coverage.html&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Coverage maps" target="_self">
                              <i className="icon-location-unitedstates" aria-hidden="true"></i>
             Coverage maps
             </a>
                          </li>
                          <li className="hide-lg hide-md">
                            <a href="https://www.att.com/maps/wireless-coverage.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Coverage maps&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/maps/wireless-coverage.html&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Coverage maps" target="_self">
                              <i className="icon-location-unitedstates" aria-hidden="true"></i>
             Coverage maps
             </a>
                          </li>
                          <li className="hide-sm hide-xsm">
                            <a href="https://www.att.com/gen/general?pid=11627" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Business customers&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/gen/general?pid=11627&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Business customers" target="_self">
                              <i className="icon-building-midsizedbuilding" aria-hidden="true"></i>
             Business customers
             </a>
                          </li>
                          <li className="hide-lg hide-md">
                            <a href="https://www.att.com/gen/general?pid=11627" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Business customers&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/gen/general?pid=11627&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Business customers" target="_self">
                              <i className="icon-building-midsizedbuilding" aria-hidden="true"></i>
             Business customers
             </a>
                          </li>
                        </ul>
                      </div>
                      </div>
                    </div>
                    <div id="z5-ftr-col2" className="span12-sm span6 span4-md">
                      <div><div className="parbase linkContainer section">
                        <ul className="no-bullet ">
                          <li className="hide-sm hide-xsm">
                            <a href="https://www.att.com/gen/landing-pages?pid=3309" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;About AT&amp;T&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/gen/landing-pages?pid=3309&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="About AT&amp;T" target="_self">
             About AT&amp;T
             </a>
                          </li>
                          <li className="hide-lg hide-md">
                            <a href="https://about.att.com/category/all_news.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;About AT&amp;T&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://about.att.com/category/all_news.html&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="About AT&amp;T" target="_self">
             About AT&amp;T
             </a>
                          </li>
                          <li className="hide-sm hide-xsm">
                            <a href="https://www.att.com/contactus/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Contact us&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/contactus/&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Contact us" target="_self">
             Contact us
             </a>
                          </li>
                          <li className="hide-lg hide-md">
                            <a href="https://www.att.com/contactus/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Contact us&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/contactus/&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Contact us" target="_self">
             Contact us
             </a>
                          </li>
                          <li className="hide-sm hide-xsm">
                            <a href="https://secure.opinionlab.com/ccc01/o.asp?id=fXJtjaWr" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Feedback&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://secure.opinionlab.com/ccc01/o.asp?id=fXJtjaWr&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Feedback" target="_blank">
             Feedback
             <i className="icon-datanetwork-link" aria-hidden="true" aria-label="External Link"></i>
                            </a>
                          </li>
                          <li className="hide-lg hide-md">
                            <a href="https://secure.opinionlab.com/ccc01/o.asp?id=fXJtjaWr" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Feedback&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://secure.opinionlab.com/ccc01/o.asp?id=fXJtjaWr&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Feedback" target="_blank">
             Feedback
             <i className="icon-datanetwork-link" aria-hidden="true" aria-label="External Link"></i>
                            </a>
                          </li>
                          <li>
                            <LocaleToggle />
                          </li>
                        </ul>
                      </div>
                      </div>
                    </div><div id="z5-ftr-col3" className="span12-sm span3 span4-md">
                      <div><div className="parbase linkContainer section">
                        <ul className="ftr-social-links ">
                          <li className="hide-sm hide-xsm">
                            <a href="https://twitter.com/att" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Follow us on Twitter&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://twitter.com/att&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Follow us on Twitter" target="_blank">
                              <i className="icon-social-twitterL" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li className="hide-lg hide-md">
                            <a href="https://twitter.com/att" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Follow us on Twitter&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://twitter.com/att&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Follow us on Twitter" target="_blank">
                              <i className="icon-social-twitterL" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li className="hide-sm hide-xsm">
                            <a href="https://www.facebook.com/ATT" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Follow us on Facebook&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.facebook.com/ATT&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Follow us on Facebook" target="_blank">
                              <i className="icon-social-facebookL" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li className="hide-lg hide-md">
                            <a href="https://www.facebook.com/ATT" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Follow us on Facebook&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.facebook.com/ATT&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Follow us on Facebook" target="_blank">
                              <i className="icon-social-facebookL" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li className="hide-sm hide-xsm">
                            <a href="https://www.instagram.com/att/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Follow us on Instagram&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.instagram.com/att/&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Follow us on Instagram" target="_blank">
                              <i className="icon-social-instagramL" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li className="hide-lg hide-md">
                            <a href="https://www.instagram.com/att/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Follow us on Instagram&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.instagram.com/att/&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Follow us on Instagram" target="_blank">
                              <i className="icon-social-instagramL" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li className="hide-sm hide-xsm">
                            <a href="https://www.linkedin.com/company/at&amp;t" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Follow us on Linkedin&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.linkedin.com/company/at&amp;t&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Follow us on Linkedin" target="_blank">
                              <i className="icon-social-linkedinL" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li className="hide-lg hide-md">
                            <a href="https://www.linkedin.com/company/at&amp;t" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Follow us on Linkedin&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.linkedin.com/company/at&amp;t&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Follow us on Linkedin" target="_blank">
                              <i className="icon-social-linkedinL" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                        <div className="parbase linkContainer section">
                          <ul className="no-bullet ">
                            <li className="hide-sm hide-xsm">
                              <a href="https://forums.att.com/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Community forums&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://forums.att.com/&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Community forums" target="_self">
                                <i className="icon-bubble-forums" aria-hidden="true"></i>
             Community forums
             </a>
                            </li>
                            <li className="hide-lg hide-md">
                              <a href="https://forums.att.com/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Community forums&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://forums.att.com/&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Community forums" target="_self">
                                <i className="icon-bubble-forums" aria-hidden="true"></i>
             Community forums
             </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="clearfix"></div>
                  </div>
                </div>
                <div id="z5-footer-legal" className="row">
                  <div className="span12">
                    <div><div className="parbase linkContainer section">
                      <ul className="ftr-legal-links clear-fix">
                        <li className="hide-sm hide-xsm">
                          <a href="https://www.att.com/legal/legal-policy-center.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Legal policy center&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/legal/legal-policy-center.html&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Legal policy center" target="_self">
             Legal policy center
             </a>
                        </li>
                        <li className="hide-lg hide-md">
                          <a href="https://m.att.com/shopmobile/legal/legal-policy-center.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Legal policy center&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://m.att.com/shopmobile/legal/legal-policy-center.html&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Legal policy center" target="_self">
             Legal policy center
             </a>
                        </li>
                        <li className="hide-sm hide-xsm">
                          <a href="http://about.att.com/sites/privacy_policy" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Privacy policy&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;http://about.att.com/sites/privacy_policy&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Privacy policy" target="_self">
             Privacy policy
             </a>
                        </li>
                        <li className="hide-lg hide-md">
                          <a href="https://www.att.com/gen-mobile/privacy-policy?pid=2506" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Privacy policy&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/gen-mobile/privacy-policy?pid=2506&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Privacy policy" target="_self">
             Privacy policy
             </a>
                        </li>
                        <li className="hide-sm hide-xsm">
                          <a href="https://www.att.com/legal/terms.attWebsiteTermsOfUse.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Terms of use&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/legal/terms.attWebsiteTermsOfUse.html&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Terms of use" target="_self">
             Terms of use
             </a>
                        </li>
                        <li className="hide-lg hide-md">
                          <a href="https://www.att.com/gen-mobile/general?pid=11561" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Terms of use&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/gen-mobile/general?pid=11561&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Terms of use" target="_self">
             Terms of use
             </a>
                        </li>
                        <li className="hide-sm hide-xsm">
                          <a href="https://www.att.com/gen/public-affairs?pid=20879" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Broadband details&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/gen/public-affairs?pid=20879&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Broadband details" target="_self">
             Broadband details
             </a>
                        </li>
                        <li className="hide-lg hide-md">
                          <a href="https://www.att.com/gen/public-affairs?pid=20879" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Broadband details&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/gen/public-affairs?pid=20879&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Broadband details" target="_self">
             Broadband details
             </a>
                        </li>
                        <li className="hide-sm hide-xsm">
                          <a href="http://www.att.com/internal/adchoices" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Advertising choices&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;http://www.att.com/internal/adchoices&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Advertising choices" target="_blank">
             Advertising choices
             <i className="icon-datanetwork-link" aria-hidden="true" aria-label="External Link"></i>
                          </a>
                        </li>
                        <li className="hide-lg hide-md">
                          <a href="http://www.att.com/internal/adchoices" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Advertising choices&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;http://www.att.com/internal/adchoices&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Advertising choices" target="_blank">
             Advertising choices
             <i className="icon-datanetwork-link" aria-hidden="true" aria-label="External Link"></i>
                          </a>
                        </li>
                        <li className="hide-sm hide-xsm">
                          <a href="https://www.att.com/shop/wireless/mobile-accessibility.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Accessibility&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/shop/wireless/mobile-accessibility.html&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Accessibility" target="_self">
             Accessibility
             </a>
                        </li>
                        <li className="hide-lg hide-md">
                          <a href="https://m.att.com/shopmobile/wireless/mobile-accessibility.html" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Accessibility&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://m.att.com/shopmobile/wireless/mobile-accessibility.html&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Accessibility" target="_self">
             Accessibility
             </a>
                        </li>
                        <li className="hide-sm hide-xsm">
                          <a href="https://www.att.com/sitemap/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Site map&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/sitemap/&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Site map" target="_self">
             Site map
             </a>
                        </li>
                        <li className="hide-lg hide-md">
                          <a href="https://www.att.com/sitemap/" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;Site map&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;https://www.att.com/sitemap/&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}" aria-label="Site map" target="_self">
             Site map
             </a>
                        </li>
                      </ul>
                    </div>
                    </div>
                  </div>
                </div>
                <div id="z5-footer-copyright" className="row">
                  <div className="span12">
                    <div className="span9 span12-xsm span12-sm span9-md pull-left">
                      <div><div className="text parbase section">
                        <div>
                          <p><a href="https://www.att.com/gen/privacy-policy?pid=2587" target="_self" title="Intellectual Property"><u>©2017 AT&amp;T Intellectual Property</u>.&nbsp;</a>All rights reserved.<br />
                          </p>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div id="z5-trust-logo" className="span3 span12-xsm span12-sm span3-md pull-right">
                      <a tabIndex="0" href="https://privacy.truste.com/privacy-seal/validation?rid=6a62df46-069b-45ec-8768-f516726eb8f6" title="TRUSTe Privacy Certification" id="ge5p_z7_s4003" target="_blank" data-analytics-action="linkClick" data-analytics-code="Link_Click" data-analytics-info="{&#39;events.linkName&#39;:&#39;link. This site is certified by TRUSTe This link will open a new window&#39;,&#39;events.linkPosition&#39;:&#39;Footer&#39;, &#39;events.linkDestinationUrl&#39;:&#39;//privacy.truste.com/privacy-seal/validation?rid=6a62df46-069b-45ec-8768-f516726eb8f6&#39;,&#39;events.linkPath&#39;:&#39;null&#39;}">
                        <span className="hidden-spoken">Opens a new window</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer><div className="color-test"></div>
        </div>
      </div>
    );
  }
}
