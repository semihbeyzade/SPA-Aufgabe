const btnAddRow = document.querySelector('#addRow')
const sampleTableElem = document.querySelector('#sampleTable')

btnAddRow.addEventListener('click', () => {
    const row = sampleTableElem.insertRow(2)
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    cell1.innerHTML = 'Row3 Cell1'
    cell2.innerHTML = 'Row3 Cell2'
})