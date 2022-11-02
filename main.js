// $("#box").animate({
//     width: "500px",
//     height: "100px",
//     top: "100px",
//     left: "100px",
// }, 5000)

// $("ul").append("<li>4</li>", "<div>5</div>", "<span>6</span>");

$("#numIn").keyup(function (e) {
    const khmer = numToKhmer(e.target.value);
    $("#result").html(khmer);
})

const singleDigits = ["", "មួយ", "ពីរ", "បី", "បួន", "ប្រាំ", "ប្រាំមួយ", "ប្រាំពីរ", "ប្រាំបី", "ប្រាំបួន"],
    doubleDigits = ["", "ដប់", "ម្ភៃ", "សាមសិប", "សែសិប", "ហាសិប", "ហុកសិប", "ចិតសិប", "ប៉ែតសិប", "កៅសិប"],
    higherThan90 = ["", "", "រយ", "ពាន់", "ម៉ឺន", "សែន", "លាន", "កោដិ"];

const numToKhmer = num => {
    if (num === "0") return "សូន្យ";
    num = num.split("").reverse();
    let result = "";
    num.forEach((n, i) => {
        if (i > 7) i -= 7;
        if (i === 0) result = singleDigits[n] + result;
        else if (i === 1) result = doubleDigits[n] + result;
        else result = singleDigits[n] + higherThan90[i] + result;
    });

    return result;
}