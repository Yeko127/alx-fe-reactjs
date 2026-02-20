import { useState } from "react";

const AddTodoForm = ({ onAdd }) => {
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!text.trim()) return;

        onAdd(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            data-testid="todo-input"
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Add todo"
            />

            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;