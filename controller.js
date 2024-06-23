var urls = [];

const controller = {
    // GET /api/users
    shortenURL: (req, res) => {
        let url = req.body.url;
        let index = urls.length;
        urls.push(url);
        res.send({ original_url: url, short_url: index });
    },
    getURL: (req, res) => {
        let index = req.params.index;
        if (index >= urls.length) {
            res.send({ error: 'Invalid short url' });
            return;
        }
        let url = urls[index];
        res.redirect(url);
    }
}

export default controller;