import styled from 'styled-components';

const Text = styled.div`
border: 0 none;
font-size:  ${(props) => props.fontsize ? props.fontsize : '18px'} ;
font-style: normal;
font-weight : 'normal;'
margin: 0;
padding: 0;
vertical-align: baseline;
font-family:  ${(props) => props.bold ? 'Omnes-ATT-W02-Medium ' : props.italics ? 'Omnes_ATTW02Italic' : 'Omnes-ATT-W02'};
color:	${(props) => props.color} ;
`;

export default Text;
