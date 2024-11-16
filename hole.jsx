import { useState } from "react";

export default function hole({id,num}) {
    let [gopher,setgopher] = useState("gopher hidden");
    function Click() {
        setgopher("gopher");
    }

    if (id == num) {
        setgopher("gopher")
    }

    return (
      <div className="cell" onClick={Click}>
        <div className="hole"></div>
        <div className={id == num ? "gopher" : "gopher hidden"}></div>
        <div className="bomb hidden"></div>
        <div className="hole-front"></div>
        <p>{id} {id == num ? "true" : "false"}</p>
      </div>
    );
  }