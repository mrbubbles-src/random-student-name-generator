import { useState } from "react";

export default function NameToLocalStorageForm() {
    const [studentName, setStudentName] = useState("");

    const saveToStorage = () => {
        localStorage.setItem(studentName, studentName);
        setStudentName("");
    };

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <input
                type="text"
                value={studentName}
                onChange={(event) => setStudentName(event.target.value)}
                placeholder="Input a Student Name"
            />

            <button type="submit" onClick={saveToStorage}>
                Submit Student Name
            </button>
        </form>
    );
}
