import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : `white`};

  height: ${props => (props.height ? props.height : `100%`)};
  padding: ${props => (props.padding ? props.padding : `8px;`)};
  margin: ${props => (props.margin ? props.margin : ``)};

  box-sizing: border-box;
  border-radius: 5px;
`;

export default Wrapper;
