import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./common.scss";

export default function ActionCard({
  children,
  title,
  body,
  actions,
  triggerAction,
}) {
  return (
    <div className="action-card">
      <Card lg={{ maxWidth: 800 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
            {children}
          </Typography>
        </CardContent>
        <div className="action-card-actions">
          <CardActions>
            {actions.map((action) => (
              <Button size="large" onClick={() => triggerAction(action.id)}>
                {action.name}
              </Button>
            ))}
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
