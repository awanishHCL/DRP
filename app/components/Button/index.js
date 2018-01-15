/**
*
* Button
*
*/
import styled from 'styled-components';

const Button = styled.button`

background-color: ${(props) => props.disable ? '#e2e2e2' : props.primary ? '#0574ac' : '#FFF'};
background-image: ${(props) => props.disable ? 'linear-gradient(to bottom, #c8c8c8 0%, #b9b9b9 50%, #b9b9b9 100%)' : props.primary ? 'linear-gradient(to bottom, #078cc5 0%, #0574ac 50%, #0574ac 100%)' : 'none'};
border: ${(props) => props.disable ? '1px solid #ccc' : props.primary ? '1px solid #0574ac' : props.secondary ? '1px solid #ccc' : 'none'};
color: ${(props) => props.disable ? '#f6f6f6' : props.primary ? '#fff' : props.secondary ? '#006699' : 'none'};
cursor: ${(props) => props.disable ? 'not-allowed' : props.primary ? 'pointer' : props.secondary ? 'pointer' : 'not-allowed'};
border-radius: 8px !important;
font-size: 19px !important;
font-family: Omnes-ATT-W02-Medium !important;
float: right;
margin-left: 20px;
padding: 13px 60px;
-moz-hyphens: auto;
display: inline-block;
outline: 0 none;
overflow: hidden;
text-align: center;
word-break: keep-all;
word-wrap: normal;
background-position: center 48%;
background-repeat: no-repeat;
line-height: 20px;
font-weight: 400;
text-transform: none;
font: inherit;
align-items: flex-start;
text-indent: 0px;
text-shadow: none;
text-rendering: auto;
letter-spacing: normal;
word-spacing: normal;
`;
export default Button;
