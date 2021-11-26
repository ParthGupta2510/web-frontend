import React from "react";
import Styles from "../../../styles/pages/home.module.css";
import CommitteeCard from "./CommitteeCard";
export default function CommitteesHome() {
  const data = [
    {
      number: 1,
      heading: "Technology",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?`,
      route: "committees/techCom",
    },
    {
      number: 2,
      heading: "Social and Culture",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?`,
      route: "committees/socult",
    },
    {
      number: 3,
      heading: "Sports and Games",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?`,
      route: "committees/sports",
    },
    {
      number: 4,
      heading: "Students' Welfare",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?`,
      route: "committees/welfare",
    },
  ];
  return (
    <div className={Styles.committeesContainer}>
      {data.map((item, index) => (
        <CommitteeCard key={index} data={item} />
      ))}
    </div>
  );
}
