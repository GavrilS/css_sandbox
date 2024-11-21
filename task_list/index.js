taskTableRows = document.getElementById('tasks-table-body');
console.log('Task table body:\n', taskTableRows);
// console.log(typeof(taskTableRows));

for (const tr of taskTableRows.children) {
    // console.log(tr.children[0]);
    // console.log(tr.children[1]);
    trButtons = tr.children[1];
    editBtn = trButtons.children[0];
    removeBtn = trButtons.children[1];
    editBtn.addEventListener('click', (e) => {
        editTask(tr);
    });
    removeBtn.addEventListener('click', (e) => {
        removeTask(tr);
    })
    console.log(trButtons);
    console.log('--------------------');
}


function editTask(e) {
    console.log('Edit task event: ', e);
}

function removeTask(e) {
    console.log('Remvoe task for row: ', e);
    e.remove();
}
