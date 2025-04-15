document.getElementById("generateBtn").addEventListener("click", async function () {
    const keyword = document.getElementById("keyword").value;
    const output = document.getElementById("output");
    output.innerHTML = "Loading...";

    try {
        const res = await fetch(`/api/hashtags?keyword=${encodeURIComponent(keyword)}`);
        const data = await res.json();

        if (data.hashtags && data.hashtags.length > 0) {
            output.innerHTML = data.hashtags.map(tag => `#${tag}`).join(" ");
        } else {
            output.innerHTML = "No hashtags found.";
        }
    } catch (err) {
        console.error(err);
        output.innerHTML = "Error fetching hashtags.";
    }
});

document.getElementById("keyword").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        document.getElementById("generateBtn").click();
    }
});