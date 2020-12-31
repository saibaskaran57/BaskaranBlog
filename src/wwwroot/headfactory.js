window.headfactory = {
    setTitle: function (title) {
        document.title = title;
    },
    setMetadata: function (key, content) {
        var link = document.createElement('meta');
        link.setAttribute('name', key);
        link.content = content;
        document.getElementsByTagName('head')[0].appendChild(link);
        // document.querySelector(`meta[name="${key}"]`).setAttribute("content", content);
    },
    setGraphMetadata: function (key, content) {
        var link = document.createElement('meta');
        link.setAttribute('property', key);
        link.content = content;
        document.getElementsByTagName('head')[0].appendChild(link);
    },
};