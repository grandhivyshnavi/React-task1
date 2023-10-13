import '../App.css';
import { useState } from "react";

function WordCounter() {
    const [state, setState] = useState({
        wordCount: 0
    });
    const handleKeyPress = (e) => {
        const count = e.target.value;
        const countWords = (count) => {
            if (count.length === 0) {
                return 0;
            }
            else {
                count = count.replace(/(^\s*)|(\s*$)/gi, "");
                count = count.replace(/[ ]{2,}/gi, " ");
                count = count.replace(/\n /, "\n");
                return count.split(' ').length;
            }
        }
        setState({
            wordCount: countWords(count),
        });
    }
    return (
        <div id="d">
            <div id="d0">
                <div id="d1">
                    <h1 style={{ color: "black" }}>Responsive Paragraph Word Counter</h1>
                </div>
                <div><form><textarea id="t1" rows="10" placeholder='' onChange={handleKeyPress}></textarea></form></div>
                <h3 id="h3">Word Count: {state.wordCount}</h3>
            </div>
        </div>
    )
}
export default WordCounter;