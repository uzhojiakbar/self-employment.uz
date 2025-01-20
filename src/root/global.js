import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  padding: 10px 15px;
  border-radius: 10px;
  outline: none;
  font-size: Poppins;
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${({ color }) => color};
    color: white;
  }
`;

Button.Con = styled.div`
  height: 60px;
  width: ${({ w }) => (w ? w : "100%")};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  margin-top: ${({ m }) => (m ? m : "20px")};
`;

export const Container = styled.div`
  width: 100vw;
  max-width: 1920px;
  margin: 0 auto;
`;

Container.Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
`;
