function fixHeaders(e) {
    e.responseHeaders.forEach(function(header) {
        if (header.name.toLowerCase() === "content-disposition") {
            header.value = header.value.replace(/(;\s*filename\s*=\s*)([^\";]+)/, "$1\"$2\"");
        }
    });
    return {responseHeaders: e.responseHeaders};
}

browser.webRequest.onHeadersReceived.addListener(
    fixHeaders,
    {urls: ["<all_urls>"]},
    ["blocking", "responseHeaders"]
);
