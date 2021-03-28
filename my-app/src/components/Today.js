import React, { useState } from "react";

export default function Today({ today, setToday }) {
  let currentDate = new Date();
  let y = currentDate.getFullYear();
  let m = currentDate.getMonth() + 1;
  let d = currentDate.getDate();

  setToday(`${m}/${d}/${y}`);

  return (
    <div className="dateContainer">
      <div className="today">{today}</div>
    </div>
  );
}
