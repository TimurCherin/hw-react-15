import { List, Wrap } from "./ExpressoFeedback.styled";

export const Feedback = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const positiveFeedback = total ? (good / total) * 100 : 0;

    return (
        <Wrap>
            <List>
                <h2>Statistics</h2>
                <li>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {total}</p>
                    <p>Positive Feedback: {Math.round(positiveFeedback)}%</p>
                </li>
            </List>
        </Wrap>
    );
};