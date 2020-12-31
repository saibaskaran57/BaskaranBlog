window.onload = function () {
    if (window.location.pathname === '/posts/2020/11/blazor-getting-started') {
        headfactory.setTitle('Building blog with Blazor - Getting Started')
        headfactory.setMetadata('description', 'getting-started');
        headfactory.setGraphMetadata("og:type", "website");
        headfactory.setGraphMetadata("og:title", 'Building blog with Blazor - Getting Started');
        headfactory.setGraphMetadata("og:description", 'getting-started');
        headfactory.setGraphMetadata("og:image", window.location.origin + '/assets/posts/2020/11/blazor-gettingstarted/jesuskiteque-header.jpg');
        headfactory.setGraphMetadata("og:url", window.location.href);
    } else {
        headfactory.setTitle('Baskaran Blog')
        headfactory.setMetadata('description', 'Hey there, my name is Baskaran Govindaras. Do you love techy stuff relates to .NET development & architectures? Come & collaborate with me!');
        headfactory.setGraphMetadata("og:type", "website");
        headfactory.setGraphMetadata("og:title", 'Baskaran Blog');
        headfactory.setGraphMetadata("og:description", 'Hey there, my name is Baskaran Govindaras. Do you love techy stuff relates to .NET development & architectures? Come & collaborate with me!');
        headfactory.setGraphMetadata("og:image", 'https://media-exp1.licdn.com/dms/image/C5603AQH135kxag08Jg/profile-displayphoto-shrink_200_200/0/1602066798386?e=1614211200&amp;v=beta&amp;t=sGlb5A0rHs240qq0JAIw85rbWcu0Qd2lq9etDYbJvHg');
        headfactory.setGraphMetadata("og:url", window.location.href);
    }
};

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