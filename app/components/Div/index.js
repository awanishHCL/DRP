import styled from 'styled-components';

const Div = styled.div`
margin: ${(props) => props.margin};
padding: ${(props) => props.padding};
padding-top: ${(props) => props.paddingtop};
margin-top: ${(props) => props.margintop};
margin-left: ${(props) => props.marginleft};
width: ${(props) => props.width};
`;

export default Div;
