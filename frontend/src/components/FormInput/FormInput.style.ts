import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .form-label {
    margin: auto;
  }
  input {
    height: 2rem;
    width: 22rem;
    max-width: 90%;
    margin: auto;
    background-color: var(--primary-700);
  }
`;
