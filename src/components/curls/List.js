import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";

import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/GetApp";

//const filterByEnv = (env) => (curl) => env === "all" || curl.env === env;
const filterBySearch = (search) => (curl) => curl.description.includes(search);

const CurlList = ({ resource, clickHandler, query: { search } }) => {
  const [curls] = React.useState(resource.read());
  const [filteredCurls, setFilteredCurls] = React.useState(curls);
  React.useEffect(() => {
    const filtered = curls
      //  .filter(filterByEnv(env))
      .filter(filterBySearch(search));
    setFilteredCurls(filtered);
  }, [search]);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {filteredCurls.map((curl) => {
        const labelId = `list-label-${curl.description}`;

        return (
          <ListItem
            key={curl.description}
            // onClick={() => clickHandler(curl.name)}
            // secondaryAction={
            //   <IconButton edge="end" aria-label="comments">
            //     <CommentIcon />
            //   </IconButton>
            // }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              {/* <ListItemText id={labelId} primary={`${curl.description}`} /> */}
              <Link to={`/parser/${curl.name}`}>{curl.name}</Link>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CurlList;
