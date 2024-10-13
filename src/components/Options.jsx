import { List, Wrap } from "./ExpressoFeedback.styled";

export const Options = ({ addGoodFeedback, addNeutralFeedback, addBadFeedback }) => {
    return (
        <Wrap>
            <List>
                <h2>Please leave feedback</h2>
                <li>
                    <button type="button" onClick={addGoodFeedback}>Good</button>
                    <button type="button" onClick={addNeutralFeedback}>Neutral</button>
                    <button type="button" onClick={addBadFeedback}>Bad</button>
                </li>
            </List>
        </Wrap>
    );
};