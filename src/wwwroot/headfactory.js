window.headfactory = {
    setTitle: function (title) {
        document.title = title;
    },
    setMetadata: function (key, content) {
        document.querySelector(`meta[name="${key}"]`).setAttribute("content", content);
    },
    setGraphMetadata: function (key, content) {
        document.querySelector(`meta[property="${key}"]`).setAttribute("content", content);
    },
};