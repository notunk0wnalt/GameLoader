
function GetGameListJSON() {
    fetch(".sample.json")
        .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data));
}