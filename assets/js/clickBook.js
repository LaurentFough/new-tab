function main() {
    window.document.getElementById("crunch").onclick = crunch;
    window.document.getElementById("youtube").onclick = ytb;
    window.document.getElementById("twitch").onclick = twitch;

    function crunch() {
        window.open("https://crunchyroll.com", "_blank");
    }

    function ytb() {
        window.open("https://youtube.com", "_blank");
    }

    function twitch() {
        window.open("https://twitch.tv", "_blank");
    }

};

main();