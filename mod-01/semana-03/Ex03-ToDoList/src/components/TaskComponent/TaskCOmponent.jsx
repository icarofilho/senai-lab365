import {
  Button,
  Img,
  ButtonArea,
  TaskArea,
  Container,
} from "./TaskComponent.Styles";

import deleteImg from "../../assets/delete.png";
import editImg from "../../assets/edit.png";

import { useState } from "react";

export function TaskComponent(props) {
  const { taskTitle, pos, handlerEdit, handlerDelete } = props;

  return (
    <Container>
      <TaskArea>
        <input type="checkbox" /> {taskTitle}
      </TaskArea>
      <ButtonArea>
        <Button onClick={() => handlerEdit(pos)}>
          <Img src={editImg} alt="delete" />
        </Button>

        <Button onClick={() => handlerDelete(pos)}>
          <Img src={deleteImg} alt="delete" />
        </Button>
      </ButtonArea>
    </Container>
  );
}
