import { url } from "../util/util.js";

const getId = () => new URLSearchParams(window.location.search).get("id");

async function deleteButton(id) {
    document.getElementById(id)?.remove();
    await fetch(`${url}/deleteNote/${id}`, { method: "DELETE" });
}

function notesDetailCreation(id, note) {
    const division = Object.assign(document.createElement("div"), {
        className: "notes",
        id,
    });
    const paragraph = Object.assign(document.createElement("p"), {
        textContent: note,
    });
    const button = Object.assign(document.createElement("button"), {
        textContent: "Delete",
    });

    button.addEventListener("click", () => deleteButton(id));
    division.append(paragraph, button);
    document.getElementById("noteDetail").append(division);
}

async function fetchBookDetail() {
    const {
        value: { rows },
    } = await (await fetch(`${url}/noteDetail/${getId()}`)).json();
    rows.forEach(({ id, note }) => notesDetailCreation(id, note));
}

async function plus(note) {
    await fetch(`${url}/noteSubmit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: getId(), note }),
    });
}

function addingNote() {
    const plusButton = document.getElementById("plusButton");
    const text = document.getElementById("note");

    plusButton.addEventListener("click", async () => {
        if (!text.value.trim()) return alert("Please fill the required field");
        await plus(text.value);
        setTimeout(() => location.reload(), 2000);
        text.value = "";
    });
}

addingNote();
fetchBookDetail();
