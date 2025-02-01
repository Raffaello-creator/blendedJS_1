// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

const min = Math.floor(Math.random() * (59 - 0) + 0);
let quarter = "";

switch (true) {
    case (min >= 0 && min < 15):
        quarter = "Первую";
        
        break;
    case (min >= 15 && min < 30):
        quarter = "Вторую";
        
        break;
    case (min >= 30 && min < 45):
        quarter = "Третью";
        
        break;
    case (min >= 45 && min < 0):
        quarter = "Четвертую";
        
        break;

}
alert(`${min} входит в ${quarter} четверть`);