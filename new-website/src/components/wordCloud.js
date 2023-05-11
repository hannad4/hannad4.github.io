// import React from "react";
// import { fetchSimpleIcons, Cloud } from "react-icon-cloud";

// export default function DynamicCloud() {
//   const skillsArray = ["test"];
//   React.useEffect(() => {
//     fetchSimpleIcons("test");
//     const renderedIcons = React.useMemo(() => {
//       const icons = ["test"];
//       for (const k of skillsArray) {
//         icons.push(skillsArray[k]);
//       }

//       return icons.map((i) => renderCustomIcon(i));
//     }, ["test"]);

//     return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
//   });
// }

// STATIC LOADING

import { Cloud } from "react-icon-cloud";

export default function wordCloud() {
  return (
    <Cloud id="wordCloud">
      <a style={{ color: "white" }}>hello</a>
      <a style={{ color: "white" }}>hello</a>
      <a style={{ color: "white" }}>hello</a>
      <a style={{ color: "white" }}>hello</a>
      <a style={{ color: "white" }}>hello</a>
      <a style={{ color: "white" }}>hello</a>
      <a style={{ color: "white" }}>hello</a>
      <a style={{ color: "white" }}>hello</a>
      <a style={{ color: "white" }}>hello</a>
      <a style={{ color: "white" }}>hello</a>
      <a style={{ color: "white" }}>hello</a>
      <a style={{ color: "white" }}>hello</a>
    </Cloud>
  );
}
