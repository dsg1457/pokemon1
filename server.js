const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get ('/pokemon/:id', (req, res) => {
    res.render('Show', {
        pokemon: pokemon[req.params.id]
    })
})

app.listen(3000, () => {
    console.log('listening');
})

mongoose.connect(MONGO_URI, CONFIG);
//mongoose.connect(MONGO_URI, CONFIG);

mongoose.set('strictQuery', true);

//index
app.get('/pokemon', (req, res) => {

    Pokemon.find({}, (error, allPokemon) =>{
        res.render('Index', {pokemon: allPokemon})
    })
    //res.render('Index', {pokemon: Pokemon});
});

//new
app.get('/pokemon/new', (req, res) =>{
app.get('/pokemon/new', (req, res) =>{
    res.render('New')
});

//post route = create
app.post('/pokemon', (req, res) => {
    //create new pokemon
    //req body is coming from from 
    Pokemon.create(req.body, (error, createdPokemon)=> {
        res.redirect('/pokemon')
    });
    });

//Show - individual pokemon
app.get('/pokemon/:id', (req, res) => {
    //res.send(req.params.id);
    Pokemon.findById(req.params.id, (error, foundPokemon)=>{
        res.render('Show', {pokemon: foundPokemon})
    })

    })

//post route = create
app.post('/pokemon', (req, res) => {
//create new pokemon
Pokemon.create(req.body, (error, createdPokemon)=> {
    res.redirect('/pokemon')
});
});







    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('Show', {pokemon: foundPokemon});
    });
    });

//Set up port//