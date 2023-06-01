function tan() {
    let r = document.getElementById("radius").value;
    let circumferenceOfCircle = 2 * 3.14 * r;
    document.getElementById("circumference").innerText = circumferenceOfCircle;
    let acreageOfCircle = 3.14 * r **2;
    document.getElementById('acreage').innerText = acreageOfCircle;
}