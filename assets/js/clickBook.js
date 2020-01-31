function main() {
    window.document.getElementById("crunch").onclick = crunch;
    window.document.getElementById("youtube").onclick = ytb;
    window.document.getElementById("icons8").onclick = icons8;
  
    function crunch() {
        window.open("https://crunchyroll.com", "_blank");
    }

    function ytb() {
        window.open("https://youtube.com", "_blank");
    }

    function icons8() {
        window.open("https://icons8.com/icons", "_blank");
    }

};

main();
