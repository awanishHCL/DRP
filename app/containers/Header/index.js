/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import './header.css';


export default class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="ub_header gn-ds2" id="ub_header">
        <div className="ub_wrapper">
          <div className="span8 pull-left">
            <div className="attLogo">
              <a id="ub_att_home" href="https://www.att.com" title="AT&amp;T Home" target="_self">
                <i id="ub_att_logo" aria-label="AT&amp;T Home" role="img"> </i>
              </a>
            </div>
            <div className="shopAndSupport">
              <i className="icon-hamburger" aria-label="Shop and support" role="img"></i>
              <span className="shopAndSupportText">Shop & support</span>
            </div>
            <div className="searchBar">
              <input id="z1-searchfield" name="q" type="search" className="span6 span5-md ng-pristine ng-valid" placeholder="I'm looking for..." />
              <button className="btn-search" type="submit" tabIndex="0" aria-label="Search" title="Search"></button>
            </div>
          </div>
          <div className="pull-right span4">
            <div className="cartIcon">
              <i className="icon-fullcart" aria-label="Cart"></i>
            </div>
            <div className="signInBlock">
              <a id="z1-profile-cta" href="https://www.att.com/olam/loginAction.olamexecute">
                <i className="icon-people-oneperson" aria-label="Sign in" role="img"></i>
                <span className="z1-profile-text">
        							Sign in
        						</span>
              </a>
            </div>
            <div id="z1-watch-text">
              <a className="watch-tv-link" href="https://www.business.att.com/businesshome" aria-label="Business" target="_blank">
                <i className="icon-building-midsizedbuilding" data-type="unauth" role="img"></i>
        					Business
        					<i className="icon-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
