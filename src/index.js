import { Box, Container } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import React from "react"
import ReactDOM from "react-dom"
import MarkdownPreviewer from "./MarkdownPreviewer"
import "./style.css"

ReactDOM.render(
  <div>
    <CssBaseline />
    <Container maxWidth="lg">
      <MarkdownPreviewer />
    </Container>
  </div>,
  document.querySelector("#root")
)
