function getFooter()
{
    const year = new Date().getFullYear();
    return `&#169; Echo Schwartz, ${year}`;
}

// Wrapper for document.getElementById(x) for brevity
function getElement(id)
{
    return document.getElementById(id);
}

// Wrapper for document.getElementById(x).innerHTML = y for brevity
function setElement(id, value)
{
	document.getElementById(id).innerHTML = value;
}