const adArray = ["ad_amazon.gif", "adanim.gif", "addesignHwbanLB.gif", "alarmGPA.gif"];

const getAd = () => {

    let num = Math.floor(Math.random()*adArray.length)
    return adArray[num];
}
let newAd = getAd();
console.log(newAd);
document.getElementById("ad").innerHTML = `<img src="assets/${newAd}" alt="">`