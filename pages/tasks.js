import { Box, Grid, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import React, { useState } from "react";
import TaskboardItem from "../Components/TaskBoard";
import { makeStyles } from "@mui/styles";
import Title from "../Components/Title";
import { database } from "../Data";

const useStyles = makeStyles({
  todo: {
    backgroundColor: "background.success",
    px: 2,
    borderWidth: 1,
    borderColor: orange[500],
    borderStyle: "solid",
    borderRadius: 3,
    py: 2,
    my: 2,
  },
});

const profile = () => {
  const [boards, setBoards] = useState(database.boards);

  const [currentCard, setCurrentCard] = useState(null);
  const [currentBoard, setCurrentBoard] = useState(null);

  const dragOverHandler = (e) => {
    e.preventDefault();
    if ((e.target.className = "item")) {
      e.target.style.backgroundColor = "background.dark";
    }
  };

  const dragStartHandler = (e, board, task) => {
    setCurrentBoard(board);
    setCurrentCard(task);
  };
  const dragEndHandler = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = "#fff";
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = "#fff";
  };

  const dropHandler = (e, board, item) => {
    e.preventDefault();
    const currentIndex = currentBoard.tasks.indexOf(currentCard);
    currentBoard.tasks.splice(currentIndex, 1);
    const dropIndex = board.tasks.indexOf(item);
    board.tasks.splice(dropIndex + 1, 0, currentCard);

    setBoards(
      boards.map((b) => {
        console.log(b);
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  };

  return (
    <Box>
      <Title />
      <Grid container spacing={2}>
        {boards.map((board) => (
          <Grid item sm={12} xs={12} lg={4}>
            <Box sx={{ padding: 3, backgroundColor: "background.light" }}>
              <Typography variant="h6">{board.title}</Typography>
              <Typography variant="body2">{board.description}</Typography>
              {board.tasks.map((task) => (
                <Box
                  draggable="true"
                  onDragOver={(e) => dragOverHandler(e)}
                  onDragStart={(e) => dragStartHandler(e, board, task)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDrop={(e) => dropHandler(e, board, task)}
                  className="item"
                  style={{
                    paddingInline: 2,
                    borderWidth: 1,
                    borderColor: orange[500],
                    borderStyle: "solid",
                    borderRadius: "5px",
                    paddingBlock: "16px",
                    marginBlock: "16px",
                  }}
                  sx={{
                    "&:hover": {
                      backgroundColor: "background.main",
                    },
                  }}
                >
                  {task.title}
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default profile;
