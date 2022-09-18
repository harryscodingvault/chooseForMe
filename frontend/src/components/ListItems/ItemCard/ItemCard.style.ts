import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90vw;
  max-width: 400px;
  margin-bottom: 1rem;
  h5 {
    color: var(--secondary-500);
  }
  .delete-btn {
    cursor: pointer;
    h5 {
      color: var(--red-dark);
      :hover {
        color: var(--red-light);
      }
    }
  }
`;
