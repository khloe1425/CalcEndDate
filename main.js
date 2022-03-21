/**
 * Input: Ngày bắt đầu, tổng buổi học, lịch học (bao nhiều ngày 1 tuần, thứ mấy), ngày nghỉ
 * 
 * 
 * 
 * 
 * Output: ngày kết thúc
 */

//  Chuyển ngày thành chuỗi dd/mm xong so sánh với mảng string 01/01 30/04 01/05
// 0 : Sun - > 6: Sat
// Month: between 0 and 11 (0 : tháng 1)
const dateOff = ["1/1/2022", "2/1/2022", "10/4/2022", "30/4/2022", "1/5/2022", "2/9/2022", "24/12/2022", "18/1/2023", "19/1/2023", "20/1/2023", "21/1/2023", "22/1/2023", "23/1/2023", "24/1/2023", "25/1/2023", "26/1/2023", "27/1/2023","29/4/2023","30/4/2023","1/5/2023","2/9/2023","24/12/2023","1/1/2024","6/2/2024","7/2/2024","8/2/2024","9/2/2024","10/2/2024","11/2/2024","12/2/2024","13/2/2024","14/2/2024","15/2/2024","18/04/2024","30/04/2024","1/05/2024","2/09/2024"];

let findEndDate = (dayStart,totalDay,dateOff,learnDay) => {
    let count = 1
    let endDate = "";
    for (let d = new Date(dayStart); count <= totalDay; d.setDate(d.getDate() + 1)) {
        let dayChecked = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
        let isDayOff = dateOff.some((day) => {
            return dayChecked == day;
        });
        for (let value of learnDay) {
            if (d.getDay() == value && isDayOff != true) {
                endDate = dayChecked;
                count++;
            }
        }
    }
    // alert(endDate);

    return endDate;
    
}


let  getEndDate = () => {
    let dayStart = document.getElementById("startDate").value;
    let totalDay = document.getElementById("total").value;
    let selectDay = document.querySelectorAll('input[name="dayOfWeek"]');
    let learnDay = [];

    for (let checkbox of selectDay) {
        if (checkbox.checked == true) {
            learnDay.push(Number(checkbox.value));
        }
    }
    // console.log(learnDay)
    let endDate= findEndDate(dayStart,totalDay,dateOff,learnDay);
    document.getElementById("endDate").innerHTML = endDate;
}

let  getEndDateLesson = () => {
    let dayStart = document.getElementById("startLesson").value;
    let totalDay = document.getElementById("totalLesson").value;
    let selectDay = document.querySelectorAll('input[name="dayWeekLesson"]');
    let learnDay = [];

    for (let checkbox of selectDay) {
        if (checkbox.checked == true) {
            learnDay.push(Number(checkbox.value));
        }
    }
    // console.log(learnDay)
    let endDate= findEndDate(dayStart,totalDay,dateOff,learnDay);
    document.getElementById("endDateLesson").innerHTML = endDate;
}
