var urls = [];

const controller = {
    // GET /api/users
    shortenURL: (req, res) => {
        let url = req.body.url;
        const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/\S*)?$/;

        if (!urlPattern.test(url)) {
            res.send({ error: 'invalid url' });
        }
        let index = urls.length;
        
        urls.push(url);
        res.send({ original_url: url, short_url: index });
    },
    getURL: (req, res) => {
        let index = req.params.index;

        if (index >= urls.length) {
            res.send({ error: 'invalid url' });
        }
        let url = urls[index];
        res.redirect(url);
    }
}

module.exports = controller;