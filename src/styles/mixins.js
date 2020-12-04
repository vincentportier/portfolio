import { css } from "styled-components"

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  button: css`
    background-color: var(--red);
    color: var(--white);
    border: 1px solid var(--red);
    border-radius: var(--border-radius);
    font-size: var(--fz-lg);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 1rem 1.5rem;
    &:after {
      display: none !important;
    }
  `,
  smallButton: css`
    background-color: var(--red);
    color: var(--white);
    border: 1px solid var(--red);
    border-radius: var(--border-radius);
    font-size: var(--fz-xs);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 0.75rem 1rem;
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: var(--white);
    background-color: var(--red);
    border: 1px solid var(--red);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-xxl);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:after {
      display: none !important;
    }
  `,
  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--black);
    transition: var(--transition);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--black);
    }
  `,
}

export default mixins
