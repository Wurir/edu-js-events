const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const pList = document.querySelectorAll('p')

pList.forEach(function (pEl) {
    pEl.addEventListener('click', handleClick)
})

function handleClick(e) {
    e.preventDefault()

    if (e.target.tagName === 'A') {
        updateLinks(e.target)
    } else if (e.target.tagName === 'P') {
        updateParagraph(e.target)
    }
}

function updateLinks(linkEl) {
    const href = linkEl.getAttribute('href')
    if (typeof stats.links[href] === 'undefined') {
        stats.links[href] = 0
    }
    stats.links[href]++
}

function updateParagraph(paragraph) {
    const paraId = paragraph.dataset.id

    if (typeof stats.paragraphs[paraId] === 'undefined') {
        stats.paragraphs[paraId] = 0
    }
    stats.paragraphs[paraId]++
}

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function (element, name) {
    console.log(element, '=>', name);

    const event = new CustomEvent(name, {
        bubbles: true,
    });

    element.dispatchEvent(event);
}

const renderStats = function (data, element) {
    let html = '';
    for (let elementType in data) {
        html += '<ul>';

        for (let key in data[elementType]) {

            html += '<li>';
            html += key + ' -> ' + data[elementType][key];
            html += '</li>';
        }

        html += '</ul>'
    }

    element.innerHTML = html;
}


document.addEventListener('click', function (e) {
    const tagName = e.target.tagName;
    if (tagName.includes('P') || tagName.includes('A')) {
        fireCustomEvent(statsElement, 'render');
    }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));

