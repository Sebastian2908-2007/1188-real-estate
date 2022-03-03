module.exports = {
   // this function will format our date to a morer readable format
   format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date 
    ).getFullYear()}`;
} 
}