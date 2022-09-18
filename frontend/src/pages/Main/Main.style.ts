import styled from "styled-components";
import { medium } from "../../utils/responsive";

export const Wrapper = styled.div`
  .title-h {
    width: 100%;
    color: var(--secondary-500);
    text-align: center;
    margin-top: 1rem;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${medium({ flexDirection: "row" })}
    .btn {
      margin-top: 1rem;
      border: 1px solid var(--secondary-500);
      background-color: var(--primary-700);
      max-width: 20rem;
      width: 15rem;
      height: 3rem;
      ${medium({ marginTop: "0" })}
      :hover {
        border: 1px solid var(--primary-500);
        background-color: var(--secondary-500);
        h5 {
          color: var(--primary-500);
        }
      }
      :active {
        border: 1px solid var(--primary-500);
        background-color: var(--secondary-100);
        h5 {
          color: var(--primary-500);
        }
      }
    }
  }
  .main-btn {
    width: 20rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 0.5rem;
    margin-bottom: 5rem;
    border: 1px solid var(--secondary-500);
    background-color: var(--primary-700);
    :hover {
      border: 1px solid var(--primary-500);
      background-color: var(--secondary-500);
      h5 {
        color: var(--primary-500);
      }
    }
    :active {
      border: 1px solid var(--primary-500);
      background-color: var(--secondary-100);
      h5 {
        color: var(--primary-500);
      }
    }
  }
  .result {
    color: var(--secondary-500);
    margin: 0 auto;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 20rem;
    border: 2px solid var(--secondary-500);
  }
`;
