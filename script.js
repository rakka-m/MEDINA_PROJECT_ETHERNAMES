  function submitter() {
            // 1. Get input values
            const ln = document.getElementById('lastname').value;
            const fn = document.getElementById('firstname').value;
            const mi = document.getElementById('middle_initial').value;
            const bday = document.getElementById('birthday').value;
            
            // 2. Handle Gender selection
            let genderVal = "Not Specified";
            const maleRadio = document.getElementById('m');
            const femaleRadio = document.getElementById('f');
            
            if (maleRadio.checked) {
                genderVal = "Male";
            } else if (femaleRadio.checked) {
                genderVal = "Female";
            }

            // 3. Create a new row for the table
            const tableBody = document.getElementById('tableBody');
            const newRow = tableBody.insertRow();

            // 4. Insert cells into the new row
            newRow.insertCell(0).innerText = ln;
            newRow.insertCell(1).innerText = fn;
            newRow.insertCell(2).innerText = mi;
            newRow.insertCell(3).innerText = bday;
            newRow.insertCell(4).innerText = genderVal;

            // 5. Clear inputs for the next entry
            document.getElementById('lastname').value = '';
            document.getElementById('firstname').value = '';
            document.getElementById('middle_initial').value = '';
            maleRadio.checked = false;
            femaleRadio.checked = false;
        }