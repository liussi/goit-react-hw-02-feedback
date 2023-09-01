import React from "react";
import { List } from "./Statistics.styled";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
<>
            <List>Good: { good}</List>
            <List>Neutral: { neutral}</List>
            <List>Bad: {bad }</List>
            <List>Total: {total }</List>
            <List>Positive feedback : { Math.floor(positivePercentage)}%</List>
 </>
);

export default Statistics;