document.getElementById("generateBtn").addEventListener("click", () => {
  const keyword = document.getElementById("keyword").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "Loading...";
  document.getElementById("keyword").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.getElementById("generateBtn").click();
  }
});

const url = 'https://hashtagy-generate-hashtags.p.rapidapi.com/v1/insta/tags?keyword=travel&include_tags_info=true';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8fc8e5ff8fmshc70426c179541bcp1c42bfjsn5442a360951b',
		'x-rapidapi-host': 'hashtagy-generate-hashtags.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
});
document.getElementById("keyword").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.getElementById("generateBtn").click();
  }
});
