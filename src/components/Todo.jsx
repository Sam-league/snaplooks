import { Box, Button, ButtonGroup, Paper, TextField } from "@mui/material";
import react, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import UndoIcon from "@mui/icons-material/Undo";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo() {
  const [list, setList] = useState([]);

  const addToList = (e) => {
    let task = e.target.value;
    if (e.key === "Enter") {
      setList([...list, { id: list.length + 1, text: task, isdone: false }]);
      e.target.value = "";
    }
    // console.log("lists", list);
  };

  const doneTask = (id) => {
    let cloneList = list;
    let index = cloneList.findIndex((k) => k.id === id);
    cloneList[index].isdone = true;
    setList([...cloneList]);
  };
  const unDoneTask = (id) => {
    let cloneList = list;
    let index = cloneList.findIndex((k) => k.id === id);
    cloneList[index].isdone = false;
    setList([...cloneList]);
  };
  const deleteTask = (id) => {
    let cloneList = list;
    let index = cloneList.findIndex((k) => k.id === id);
    cloneList[index].isdone === true && cloneList.splice(index, 1);
    setList([...cloneList]);
  };
  return (
    <Box
      style={{
        padding: 50,
        fontSize: 22
      }}
    >
      <TextField
        variant="outlined"
        label="Enter you Task"
        sx={{ marginTop: 10, margin: 2 }}
        fullWidth
        onKeyUp={(e) => addToList(e)}
      />
      {list.map((task) => (
        <Paper
          sx={{
            padding: 2,
            margin: 2,
            bgcolor: task.isdone ? "lightgreen" : "",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          {task.text}
          <ButtonGroup
            variant="outlined"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => doneTask(task.id)}>
              <CheckIcon />
            </Button>
            <Button onClick={() => unDoneTask(task.id)}>
              <UndoIcon />
            </Button>
            <Button onClick={() => deleteTask(task.id)}>
              <DeleteIcon />
            </Button>
          </ButtonGroup>
        </Paper>
      ))}
    </Box>
  );
}

export default Todo;
