/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({values : [{
                "name": "Arthur",
                "last_name": "Godfrey",
                "email": "arthur_godfrey@nccu.edu",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat"
            },
            {
                "name": "Adam",
                "last_name": "Johnson",
                "email": "wravo@yahoo.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat"
            },
            {
                "name": "Jeff",
                "last_name": "Johnson",
                "email": "bballnine@hotmail.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat"
            },
            {
                "name": "Adriana",
                "last_name": "Jameson",
                "email": "adriana.jameson@gmail.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat"
            },
            {
                "name": "Adriano",
                "last_name": "Pooley",
                "email": "adrianolpooley@lautau.com.br",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat"
            },
            {
                "name": "Alcir",
                "last_name": "Reis",
                "email": "alcirreis@yahoo.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat"
            },
            {
                "name": "Jack",
                "last_name": "Cunningham",
                "email": "jcunningham@hotmail.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat3"
            },
            {
                "name": "Alejandro",
                "last_name": "Forbes",
                "email": "alejandforbes@gmail.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat3"
            },
            {
                "name": "Alessandra",
                "last_name": "Mineiro",
                "email": "alc_mineiro@aol.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat3"
            },
            {
                "name": "Alex",
                "last_name": "Frazo",
                "email": "alex.frazo@yahoo.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat3"
            },
            {
                "name": "Alexandre",
                "last_name": "Crawford",
                "email": "xandycrawford@gmail.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat3"
            },
            {
                "name": "Alexandre",
                "last_name": "Lalwani",
                "email": "alexandrelalwani@globo.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat4"
            },
            {
                "name": "Alexandre",
                "last_name": "Jokos",
                "email": "alex.jokos@gmail.com.br",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat4"
            },
            {
                "name": "Alexandre",
                "last_name": "Paro",
                "email": "alexandre.paro@uol.com.br",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat4"
            },
            {
                "name": "Andre",
                "last_name": "Niemeyer",
                "email": "a.niemeyer@globo.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat5"
            },
            {
                "name": "Alyssa",
                "last_name": "Fortes",
                "email": "afort287@yahoo.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat5"
            },
            {
                "name": "Amit",
                "last_name": "Alvarenga",
                "email": "amit.alva@gmail.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat5"
            },
            {
                "name": "Ana Bia",
                "last_name": "Borges",
                "email": "abborges@gmail.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat6"
            },
            {
                "name": "Ana",
                "last_name": "Akamine",
                "email": "ana.akamine@uol.com.br",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat6"
            },
            {
                "name": "Anderson",
                "last_name": "Tovoros",
                "email": "alvarenga.tovoros@gmail.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat6"
            },
            {
                "name": "Andre",
                "last_name": "Borges",
                "email": "andreborges@hotmail.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat6"
            },
            {
                "name": "Andre",
                "last_name": "Wexler",
                "email": "andre.wexler@aol.com.br",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat6"
            },
            {
                "name": "Andre",
                "last_name": "Williams",
                "email": "awilly@yahoo.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat2"
            },
            {
                "name": "Andre",
                "last_name": "Sanford",
                "email": "andre.sanford@gmail.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat2"
            },
            {
                "name": "Andre",
                "last_name": "Wayne",
                "email": "andrewayne@uol.com.br",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat2"
            },
            {
                "name": "Andre",
                "last_name": "Jackson",
                "email": "andre.jackson@yahoo.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat2"
            },
            {
                "name": "Andre",
                "last_name": "Jolly",
                "email": "andre.jolly@uol.com.br",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat2"
            },
            {
                "name": "Andre",
                "last_name": "Henderson",
                "email": "andre.henderson@globo.com",
                "url": "https://si0.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
                "category" : "testCat2"
            }
          ]});
};