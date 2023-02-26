import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border: none;
  background-color: transparent;

  :hover {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
  :active {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;

  :hover {
    width: 35px;
    height: 35px;
  }
  :active {
    width: 35px;
    height: 35px;
  }
`;

export const ButtonArea = styled.span`
  /* border: 2px solid yellow; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  height: 40px;
  width: 80px;
`;

export const TaskArea = styled.span`
  /* border: 2px solid white; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Container = styled.li`
  border-bottom: 2px solid yellowgreen;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 6px;
  margin: 3px;
`;
