import React from "react";
import { CFooter, CLink } from '@coreui/react'
import { faCode} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Footer() {
  return (
    <CFooter>
  <div class = "text-center px-2 py-2">
    
    
    <CLink href="https://github.com/hannad4/hannad4.github.io/tree/new-website" target="_blank">
        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
            &nbsp; Source Code &nbsp;
        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
    </CLink>

    <br></br>
    <span>Created with ReactJS, Tailwind, and FontAwesome</span>

  </div>
</CFooter>
  );
}