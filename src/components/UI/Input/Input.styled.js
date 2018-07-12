import styled, {
  css
} from 'styled-components'

export const InputWrapper = styled.div `
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const Label = styled.label `
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input `
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  width: 100%;
  display: block;

  ${props => props.invalid && css`
    border: 1px solid red;
    background-color: #FDA49A;
  `}

  &:focus {
    outline: none;
    background-color: #ccc;
  }
`;

export const Select = styled.select `
width: 100%;
  ${props => props.invalid && css`
    border: 1px solid red;
    background-color: #FDA49A;
  `}
`
export const TextArea = styled.textarea `
 ${props => props.invalid && css`
    border: 1px solid red;
    background-color: #FDA49A;
  `}

`