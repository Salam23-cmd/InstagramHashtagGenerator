const hashtagDatabase = {
  fitness: ['#fitness', '#workout', '#gym', '#fitlife', '#fitspo', '#health', '#training', '#bodybuilding', '#motivation', '#exercise'],
  travel: ['#travel', '#wanderlust', '#vacation', '#trip', '#tourism', '#passportready', '#travelgram', '#adventure', '#explore', '#nature'],
  food: ['#food', '#yummy', '#instafood', '#foodie', '#tasty', '#homemade', '#foodlover', '#delicious', '#foodphotography', '#eat']
};

document.getElementById("generateBtn").addEventListener("click", () => {
  const keyword = document.getElementById("keyword").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  const hashtags = hashtagDatabase[keyword];

  if (hashtags) {
    resultsDiv.innerHTML = hashtags.map(tag => `<p>${tag}</p>`).join('');
  } else {
    resultsDiv.innerHTML = `<p class="text-red-500">No hashtags found. Try "fitness", "travel", or "food".</p>`;
  }
});
