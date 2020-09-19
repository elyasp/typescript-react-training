import styled from "styled-components";

export const CartContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const CartDropDown = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background: white;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  width: 140px;
  text-align: left;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      border-bottom: 1px solid #ccc;
      padding: 5px 0;

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
`;

//   .button svg {
//     margin: 0 5px 0 0;
//   }
