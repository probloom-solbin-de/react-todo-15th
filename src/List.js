import React from "react";
import styled from 'styled-components';

const ListEachBox = styled.div`
    font-family: sans-serif;
    text-align: left;
`;

const ListEach = styled.li`
    font-family: sans-serif;
    text-align: left;
    list-style: none;
`;

const ListButton = styled.button`
    font-family: sans-serif;
    text-align: center;
    Background-color : #307858;
    border-radius : 5rem;
    width : 30px;
    height : 30px;
`;

const ListText = styled.span`
    font-family: sans-serif;
    text-align: left;
    color : #2f3820;
`;

const List = ({ text, id, todoDone, onToggle, onDelete, keyDone }) => {
    if (todoDone === Boolean(keyDone)) {
      return (
          <ListEachBox>
            <ListEach>
              <ListButton id={id} onClick={onToggle}>
                ✔
              </ListButton>
              <ListText>{text}</ListText>
              <ListButton id={id} onClick={onDelete}>
                🚮
              </ListButton>
            </ListEach>
          </ListEachBox>
        );
      } 
    else {
        return <></>;
      }
};

export default List;
