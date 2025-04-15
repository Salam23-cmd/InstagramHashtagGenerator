document.getElementById("generateBtn").addEventListener("click", () => {
  const keyword = document.getElementById("keyword").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "Loading...";
  document.getElementById("keyword").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.getElementById("generateBtn").click();
  }
});

  fetch(`https://hashtagy-generate-hashtags.p.rapidapi.com/v1/insta/tags?keyword=${encodeURIComponent(keyword)}&language=en`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8fc8e5ff8fmshc70426c179541bcp1c42bfjsn5442a360951b',
      'X-RapidAPI-Host': 'hashtagy-generate-hashtags.p.rapidapi.com'
    }
  })
  .then(response => response.json())
  .then(data => {
    const hashtags = data.hashtags || [];
    if (hashtags.length > 0) {
      resultsDiv.innerHTML = hashtags.map(tag => `<p>#${tag.hashtag}</p>`).join('');
    } else {
      resultsDiv.innerHTML = `<p class="text-red-500">No hashtags found for "${keyword}".</p>`;
    }
  })
  .catch(error => {
    console.error(error);
    resultsDiv.innerHTML = `<p class="text-red-500">Error fetching hashtags. Try again later.</p>`;
  });
});
document.getElementById("keyword").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.getElementById("generateBtn").click();
  }
});
