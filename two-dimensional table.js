const my_array = [
    [0, 'Nën 1 vit', 'Mbi 1 vit', 'Mbi 2 vjet', 'Mbi 3 vjet', 'Mbi 4 vjet', 'Mbi 5 vjet', 'Mbi 6 vjet', 'Mbi 8 vjet', 'Mbi 10 vjet', 'Mbi 12 vjet', 'Mbi 14 vjet', 'Mbi 16 vjet', 'Mbi 18 vjet', 'Mbi 20 vjet', 'Mbi 22 vjet', 'Mbi 24 vjet', 'Mbi 26 vjet'],
    ['Ushtar I/ Detar I/ Rekrut', 66200, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    ['Ushtar II/ Detar II', 67200, 68200, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    ['Ushtar III/ Detar III', null, 69000, 70000, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    ['Ushtar IV/ Detar IV', null, null, 71000, 71500, 72500, 73000, 74000, 75500, 77000, 79000, 80500, null, null, null, null, null, null],
    ['Nëntetar', null, null, null, null, 74000, null, 75000, 76500, 77500, 78500, 80000, null, null, null, null, null, null],
    ['Tetar', null, null, null, null, null, null, null, 78500, 80000, 81000, 82500, null, null, null, null, null, null],
    ['Rreshter', null, null, null, null, null, null, null, 8000, 81000, 82000, 83000, 84000, 85000, 86000, null, null, null],
    ['Kapter', null, null, null, null, null, null, null, null, null, 86000, 87000, 88000, 89000, 90000, 91000, 92500, 93500],
    ['Kryekapter', null, null, null, null, null, null, null, null, null, null, null, null, 92000, 93000, 94000, 95000, 96000],
    ['Nëntoger/ Nënlejtnant', 94000, 95000, 96000, 97000, 98500, null, 99500, 101500, null, null, null, null, null, null, null, null],
    ['Toger/ Lejtnant', null, null, null, 98000, 99000, null, 100500, 102000, 103500, 105000, 107000, null, null, null, null, null],
    ['Kapiten/ Kapiten Lejtant', null, null, null, null, null, null, 102500, 103500, 105000, 106000, 107000, null, null, null, null, null],
    ['Major/ Kapiten i rangut III', null, null, null, null, null, null, null, null, null, 107000, 108000, 109500, 111000, 113000, 115000, 117000, 118500],
    ['Nënkolonel/ Kap. i rangut II', null, null, null, null, null, null, null, null, null, null, null, null, 131500, 133500, 135500, 137500, 139500],
    ['Kolonel/ Kapiten i rangut I', null, null, null, null, null, null, null, null, null, null, null, null, null, null, 158500, 161500, 163500],
    ['Gj. Brigade/ Kundëradmiral', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 190000],
    ['Gj. Major/ Nënadmiral', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 224500],
    ['Gj. Lejtnant/ Admiral', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 235000],
];

function calculateSalary() {
    const grade = document.getElementById("gradat").value;
    const years = document.getElementById("vitet_mbi").value;
    const pagaCell = document.getElementById("paga_per_grade");

    // Ensure valid selection
    if (grade === "-- Zgjidh gradën --" || years === "--Zgjidh vitet--") {
        pagaCell.innerText = "";
        return;
    }

    // Find row index based on the selected grade
    let rowIndex = -1;
    for (let i = 0; i < my_array.length; i++) {
        if (my_array[i][0] === grade) {
            rowIndex = i;
            break;
        }
    }

    // Find column index based on the selected years
    let colIndex = -1;
    for (let j = 0; j < my_array[0].length; j++) {
        if (my_array[0][j] === years) {
            colIndex = j;
            break;
        }
    }

    // Check if both indices are valid
    if (rowIndex !== -1 && colIndex !== -1) {
        const salary = my_array[rowIndex][colIndex];
        pagaCell.innerText = salary ? salary : "";
    } else {
        pagaCell.innerText = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gradat").addEventListener("change", calculateSalary);
    document.getElementById("vitet_mbi").addEventListener("change", calculateSalary);
});


/*------------------------------------------ drop down list---------------------*/

const data = {
    'Ushtar I/ Detar I/ Rekrut': ['Nën 1 vit'],
    'Ushtar II/ Detar II': ['Nën 1 vit', 'Mbi 1 vit'],
    'Ushtar III/ Detar III': ['Mbi 1 vit', 'Mbi 2 vjet'],
    'Ushtar IV/ Detar IV': ['Mbi 2 vjet', 'Mbi 3 vjet', 'Mbi 4 vjet', 'Mbi 5 vjet', 'Mbi 6 vjet', 'Mbi 8 vjet', 'Mbi 10 vjet', 'Mbi 12 vjet'],
    'Nëntetar': ['Mbi 4 vjet', 'Mbi 6 vjet', 'Mbi 8 vjet', 'Mbi 10 vjet', 'Mbi 12 vjet', 'Mbi 14 vjet'],
    'Tetar': ['Mbi 8 vjet', 'Mbi 10 vjet', 'Mbi 12 vjet', 'Mbi 14 vjet'], 
    'Rreshter': ['Mbi 8 vjet', 'Mbi 10 vjet', 'Mbi 12 vjet', 'Mbi 14 vjet', 'Mbi 16 vjet', 'Mbi 18 vjet', 'Mbi 20 vjet'],  
    'Kapter': ['Mbi 12 vjet', 'Mbi 14 vjet', 'Mbi 16 vjet', 'Mbi 18 vjet', 'Mbi 20 vjet', 'Mbi 22 vjet', 'Mbi 24 vjet', 'Mbi 26 vjet'], 
    'Kryekapter': ['Mbi 18 vjet', 'Mbi 20 vjet', 'Mbi 22 vjet', 'Mbi 24 vjet', 'Mbi 26 vjet'], 
    'Nëntoger/ Nënlejtnant': ['Nën 1 vit', 'Mbi 1 vit', 'Mbi 2 vjet', 'Mbi 3 vjet', 'Mbi 4 vjet', 'Mbi 6 vjet', 'Mbi 8 vjet'],
    'Toger/ Lejtnant': ['Mbi 3 vjet', 'Mbi 4 vjet', 'Mbi 6 vjet', 'Mbi 8 vjet', 'Mbi 10 vjet', 'Mbi 12 vjet', 'Mbi 14 vjet'], 
    'Kapiten/ Kapiten Lejtant': ['Mbi 6 vjet', 'Mbi 8 vjet', 'Mbi 10 vjet', 'Mbi 12 vjet', 'Mbi 14 vjet'], 
    'Major/ Kapiten i rangut III': ['Mbi 12 vjet', 'Mbi 14 vjet', 'Mbi 16 vjet', 'Mbi 18 vjet', 'Mbi 20 vjet', 'Mbi 22 vjet', 'Mbi 24 vjet', 'Mbi 26 vjet'], 
    'Nënkolonel/ Kap. i rangut II': ['Mbi 18 vjet', 'Mbi 20 vjet', 'Mbi 22 vjet', 'Mbi 24 vjet', 'Mbi 26 vjet'], 
    'Kolonel/ Kapiten i rangut I': ['Mbi 22 vjet', 'Mbi 24 vjet', 'Mbi 26 vjet'], 
    'Gj. Brigade/ Kundëradmiral': ['Mbi 26 vjet'],  
    'Gj. Major/ Nënadmiral': ['Mbi 26 vjet'], 
    'Gj. Lejtnant/ Admiral': ['Mbi 26 vjet'], 

    // Add other categories and their corresponding options here
};

function updateSecondDropdown() {
    const firstDropdown = document.getElementById('gradat');
    const secondDropdown = document.getElementById('vitet_mbi');
    const selectedCategory = firstDropdown.value;

    // Clear the second dropdown
    secondDropdown.innerHTML = '<option value="">--Zgjidh vitet--</option>';

    // Get the options for the selected category
    if (data[selectedCategory]) {
        data[selectedCategory].forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.text = item;
            secondDropdown.add(option);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gradat").addEventListener("change", updateSecondDropdown);
});

/*----------------------- numrat --------------------------------*/



function numberToAlbanian(num) {
  const ones = ["", "një", "dy", "tre", "katër", "pesë", "gjashtë", "shtatë", "tetë", "nëntë"];
  const teens = ["dhjetë", "njëmbëdhjetë", "dymbëdhjetë", "trembëdhjetë", "katërmbëdhjetë", "pesëmbëdhjetë", "gjashtëmbëdhjetë", "shtatëmbëdhjetë", "tetëmbëdhjetë", "nëntëmbëdhjetë"];
  const tens = ["", "", "njëzet", "tridhjetë", "dyzet", "pesëdhjetë", "gjashtëdhjetë", "shtatëdhjetë", "tetëdhjetë", "nëntëdhjetë"];
  const thousands = ["", "mijë", "milion"];

  if (num === 0) return "zero";

  function convertHundreds(number) {
    let result = "";

    if (number > 99) {
      result += ones[Math.floor(number / 100)] + "qind";
      number %= 100;
    }

    if (number > 19) {
      result += tens[Math.floor(number / 10)];
      number %= 10;
    } else if (number >= 10) {
      result += teens[number - 10];
      number = 0;
    }

    if (number > 0) {
      result += ones[number];
    }

    return result;
  }

  let parts = [];
  let thousandIndex = 0;

  while (num > 0) {
    let chunk = num % 1000;

    if (chunk > 0) {
      let chunkText = convertHundreds(chunk);
      if (thousands[thousandIndex]) {
        chunkText += thousands[thousandIndex];
      }
      parts.unshift(chunkText);
    }

    num = Math.floor(num / 1000);
    thousandIndex++;
  }

  return parts.join('');}

