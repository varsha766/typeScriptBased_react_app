import { Grid } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { Profile } from "../profile/profile";
import { CreateTaskForm } from "../createTaskForm/createTaskForm";
export const Sidebar: FC = (): ReactElement => {
    return(<Grid item md={4} sx={{
                      height: '100vh',
          position: 'fixed',
          right: 0,
          top: 0,
          width: '100%',
          backgroundColor: 'background.paper',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
            }}>
                {/* sx={{}} is used to style the component mostly contain css rule */}
        <Profile name="Nandani" />
        <CreateTaskForm/>
            </Grid>)
 };