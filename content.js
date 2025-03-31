console.log("connected");
// https://developer.chrome.com/docs/extensions/develop/concepts/activeTab
// alert('Hello, world!');
// https://stackoverflow.com/questions/32242608/javascript-only-links-in-html5
const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
const linksFound = document.getElementById('links');
const btn = document.getElementById('change-color');

let colorChanged = false;
const handleColor = () => {
    if (bodyBackgroundColor === 'rgb(240, 128, 128)' && colorChanged === false) {
        document.body.style.backgroundColor = 'rgb(16, 18, 24)';
        console.log('Background color is red!');
        colorChanged = true;
    } else if (colorChanged === true) {
        document.body.style.backgroundColor = 'rgb(240, 128, 128)';
        console.log('Background color is black!');
        colorChanged = false;
    }
    // console.log('Click Event Handler Triggered!');
    // console.log('The background color is ', bodyBackgroundColor);
}

const handleLinks = () => {
    const links = document.querySelectorAll('a');
    const linksFound = document.getElementById('links');

    links.forEach((link) => {
        console.log(link.href);
        let allLinks = document.createElement('a');
        allLinks.href = link.href;
        linksFound.appendChild(allLinks);
        console.log(allLinks);
    })
}

btn.addEventListener('click', handleColor);
btn.addEventListener('click', handleLinks);

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
      });
});