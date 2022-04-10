// constants

window.addEventListener('load', () => {
    const form = document.querySelector("#createTask")
    const taskInput = document.querySelector("#taskInput")
    const dueInput = document.querySelector("#dueInput")
    const list_el = document.querySelector("#tasks")

    // pop up to insert task

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = taskInput.value
        if (!task) {
            alert("Please add a task");
            return;
        }

        const taskDue = dueInput.value

        // Create task elements


        const task_el = document.createElement("div");
        task_el.classList.add("task")

        //task

        const task_new_el = document.createElement("div")
        task_new_el.classList.add("content1")

        // due date

        const task_due_el = document.createElement("div")
        task_due_el.classList.add("content2")

        task_el.appendChild(task_new_el)
        task_el.appendChild(task_due_el)



        // Create task Input element



        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_new_el.appendChild(task_input_el);



        // Create Due input element



        const task_dueInput_el = document.createElement("input");
        task_dueInput_el.classList.add("dueDate");
        task_dueInput_el.type = "date";
        task_dueInput_el.value = taskDue;
        task_dueInput_el.setAttribute("readonly", "readonly");

        task_due_el.appendChild(task_dueInput_el);



        // Actions


        //create actions elements


        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        // edit button

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit")
        task_edit_el.innerHTML = "Edit";

        // delete button

        const task_delete_el = document.createElement("button");
        task_edit_el.classList.add("delete")
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        // input fields to return to blank when sumitted

        taskInput.value = "";
        dueInput.value = "";

        // edit

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }

        })

        // delete

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        })

        // strike through on click

        task_input_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "save") {
                return;
            } else {
                task_input_el.style.textDecoration = "line-through";
            } 
        })

    })

})
