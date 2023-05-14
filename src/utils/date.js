export function getTodayDate() {
    /* 
    오늘의 날짜
    * Sun May 14 2023 20:30:19 GMT+0900 (한국 표준시)
    */
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const date = today.getDate()
    console.log(today)
    return { year, month, date }
}