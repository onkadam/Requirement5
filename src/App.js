import "./styles.css";

import { useState } from "react";

//Requirement 5
export default function Task5() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const [uniqueAlphabets, setUniqueAlphabets] = useState([]);
  const [uniqueNumbers, setUniqueNumbers] = useState([]);
  const [uniqueSpecialChars, setUniqueSpecialChars] = useState([]);

  const inputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const inputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let arr = [];
    for (let i = 0; i < input1.length; i++) {
      for (let j = 0; j < input2.length; j++) {
        if (input1[i] === input2[j]) {
          arr.push(input1[i], input2[j]);
        }
      }
    }
    console.log(arr);
    const allCharacters = input1 + input2;
    const alphabets = [];
    const numbers = [];
    const specialChars = [];

    for (let i = 0; i < arr.length; i++) {
      const char = arr[i];
      if (/[a-zA-Z]/.test(char)) {
        alphabets.push(char);
      } else if (/[0-9]/.test(char)) {
        numbers.push(char);
      } else {
        specialChars.push(char);
      }
    }

    setUniqueAlphabets(alphabets);
    setUniqueNumbers(
      numbers.sort((a, b) => {
        return a - b;
      })
    );
    setUniqueSpecialChars(specialChars);
  };

  return (
    <>
      <h1>Compare two input and print characters that match</h1>
      <form onBlur={handleSubmit}>
        <input type="text" value={input1} onChange={inputChange1} />
        <br />
        <br />
        <input type="text" value={input2} onChange={inputChange2} />
      </form>
      <br />
      <div>All matching alphabets: {uniqueAlphabets.join(", ")}</div>
      <div>All matching numbers: {uniqueNumbers.join(", ")}</div>
      <div>
        All matching special characters: {uniqueSpecialChars.join(", ")}
      </div>
          
    </>
  );
}
