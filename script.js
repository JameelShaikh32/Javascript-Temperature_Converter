var cel = document.getElementById("cel");
var fahr = document.getElementById("fahr");

cel.addEventListener('input', function() {
    let c = this.value;
    let f = (c * 9 / 5) + 32;
    fahr.value = f;
})

fahr.addEventListener('input', function() {
    let f = this.value;
    let c = (f - 32) * 5 / 9;
    cel.value = c;
})