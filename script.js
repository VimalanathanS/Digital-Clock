function updateclk(n)
{
    var t=new Date();
    var hrs=t.getHours();
    var min=t.getMinutes(); 
    var sec=t.getSeconds();
    if(n==0) 
    {
        hrs=t.getHours();
        if(hrs>12)
            hrs=hrs-12;
        else if(hrs===0)
            hrs=12;
    }
    var ap= t.getHours()>=12?"PM":"AM";
    let displayHrs = hrs < 10 ? "0" + hrs : hrs;
    let displayMin = min < 10 ? "0" + min : min;
    let displaySec = sec < 10 ? "0" + sec : sec;
    document.getElementById("tdis").innerHTML=`${displayHrs}:${displayMin}:${displaySec}\t${ap}`;
    updateDate();
}
var n=1;
function formt()
{
    if(n%2!=0)
        {
            updateclk(n);
            document.getElementById("form").innerHTML="24 hour";
        }
        else
        {
            document.getElementById("form").innerHTML="12 hour";
            updateclk(0);
        }   
        n++;
}
setInterval(() => updateclk(n%2!==0? n : 0), 1000);
function updateDate()
{
    let t=new Date();
    let date=t.getDate();
    let mon=t.getMonth();
    let year=t.getFullYear();
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    mon=months[mon];
    document.getElementById('ddisp').innerHTML=`<pre>${mon} ${date} ${year}</pre>`;
}
updateclk();