var app = require('express')(),
    authors = require('./server/controllers/authors');

app.get('/authors', authors.index);

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), () => {
    console.log('Server started at http://localhost:' + app.get('port'));
})