chrome.webRequest.onBeforeRequest.addListener(
    function(details){return {cancel: true}},
    {urls: 
        [ 
            "https://hesads.akamaized.net/*"
        ]
    },
    ["blocking"]
)