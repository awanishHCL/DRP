import styled from 'styled-components';

const StepListItem = styled.li`
border-radius: 4px 0 0 4px;
background-color: ${(props) => props.stepon ? '#007a3e' : '#d2d2d2'};
color: ${(props) => props.stepon ? '#1b7e28' : '#767676'};
border: 1px solid transparent;
font-family: Omnes-ATT-W02-Medium !important;
flex: 1;
margin-right: 5px;
outline: 1px solid transparent;
line-height: 20px;
box-sizing: border-box;
`;

export default StepListItem;
