import React from "react";
import { CFooter, CLink } from "@coreui/react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <CFooter>
      <div class="text-center px-2 py-10">
        <br></br>
        <span>Created with ReactJS, Tailwind, and FontAwesome</span>
      </div>
    </CFooter>
  );
}
