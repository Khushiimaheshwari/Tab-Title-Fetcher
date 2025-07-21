document.getElementById('getTitleBtn').addEventListener('click', async function () {
  const button = this;
  const titleDisplay = document.getElementById('titleDisplay');

  button.innerHTML = `
    <div class="imageContainer">
      <svg class="animate-spin image text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0
          c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Loading...
    </div>
  `;
  button.disabled = true;

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const title = tab.title || 'No title found';
    titleDisplay.textContent = title;
    titleDisplay.style.textAlign = "center";
    titleDisplay.style.marginBottom = "10px";

    button.innerHTML = `
      <div class="imageContainer">
        <svg class="image" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span class="imageText">Title Fetched!</span>
      </div>
    `;
  } catch (err) {
    titleDisplay.textContent = 'Error fetching title';
    button.innerHTML = `Error`;
  }

  setTimeout(() => {
    button.innerHTML = `
      <div class="imageContainer">
        <svg class="image" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
        </svg>
        <span class="imageText">Get Current Tab Title</span>
    </div>
    `;
    button.disabled = false;
  }, 2000);
});
