function updateclk()
{
    let t=new Date();
    let hrs=t.getHours();
    let min=t.getMinutes();
    let sec=t.getSeconds();
    if(hrs<10)
        hrs="0"+hrs;
    if(min<10)
        min="0"+min;
    if(sec<10)
        sec="0"+sec;
    document.getElementById("tdis").innerHTML=`${hrs}:${min}:${sec}`;
    updateDate();
}
setInterval(updateclk,1000);
function updateDate()
{
    let t=new Date();
    let date=t.getDate();
    let mon=t.getMonth();
    let year=t.getFullYear();
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    mon=months[mon];
    document.getElementById('ddisp').innerHTML=`${mon} ${date} ${year}`;
}