// varaible global


// connextion 
function conect () {


    base('admin').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
          
    
            if($("#loginAdmin").val() == record.get('user'))
            {
                if($('#mdpAdmin').val() == record.get('password')){
                    // alert ("ok")
                    sessionStorage.setItem('user', record.get('user'))
                    sessionStorage.setItem('mdp', record.get('password'))

                    GoMainScrenn()
                }
                else{
                    if($('#loginAdmin').val("")){
                        alert("veuillez entrer un mot de passe")
                    }
                }

            }
           
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
    
    }
// changement d'écran 

    function GoMainScrenn(){
        $('#conect').hide();
       $('#mainScreen').show();
   }


// recuperation des donnee 
    base('RESTIKO').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 50,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record, index) {
            // console.log('Retrieved', record.get('Date'));

            var articleId = 'article-' + index
            // console.log('articleID', articleId)
             dateResti = record.get('Date');
            //  console.log("fate",dateResti)
             titreResti = record.get('Ce que j\'ai fait');
            apprisResti = record.get('Ce que j\'ai appris');
              aimerResti = record.get('Ce que j\'ai aimé');
              nouveauResti = record.get('Ce que j\'ai utilisé de nouveaux');
              problemeResti = record.get("Problématiques  rencontrées");
              objectifResti= record.get("Quels sont les objectifs ?");
              manqueResti = record.get("Qu\'est-ce qui m\'a manqué ?");
              sourceResti = record.get("Qu\'est-ce que tu ferais à la place du formateur ?");
              atteintResti = record.get("Objectif ?");
            //   console.log("Objectif",objectifResti)
              noteResti = record.get("Note");


            //   console.log("source article",noteResti)

            // injecr les donner dans la liste
              var newlist = ""
            //   console.log('recprd', record.id)
              newlist = templateListe.replace("###articleId###", articleId)
              newlist = newlist.replace("###param###", articleId)
            newlist = newlist.replace("###Date###", dateResti)
            newlist = newlist.replace("###Titre###", titreResti)
            
          
            $('#articleList').append(newlist)

            // afficahge Restiko 
                
            var detailRestiko = ""
            detailRestiko = restikoTemplate.replace('###articleId###',articleId)
            detailRestiko = detailRestiko.replace('###articleId###',articleId)
            detailRestiko = detailRestiko.replace('###date###',dateResti)
            detailRestiko = detailRestiko.replace('###Fait###',titreResti)
            detailRestiko = detailRestiko.replace('###appris###',apprisResti)
            detailRestiko = detailRestiko.replace('###aimer###',aimerResti)
            detailRestiko = detailRestiko.replace('###nouveau###',nouveauResti)
            detailRestiko = detailRestiko.replace('###probleme###',problemeResti)
            detailRestiko = detailRestiko.replace('###objectif###',objectifResti)
            detailRestiko = detailRestiko.replace('###manque###',manqueResti)
            detailRestiko = detailRestiko.replace('###atteint###',atteintResti)
            detailRestiko = detailRestiko.replace('###note###',noteResti)
            // console.log(detailRestiko)
            $('#articleDetail').append(detailRestiko)

          
        })
             
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
// changement d'écran avec le bonne article qui correspond au lien 

    function displayArticle(articleId) {
        $('#mainScreen').hide()
        $('#screen2').show()
        $('.'+articleId).show()
    }
    function backlisting (){
        document.location.reload(true);

        
        
    }

    function addRestiko(){
    
        var inputDate= $('.newRestikoDate').val()
        var inputFait= $('.jAiAppris').val()
        var inputAppris= $('.jAiAppris').val()
        var inputAimer= $('.jAiAime').val()
        var inputNouveau= $('.utiliserNouveau').val()
        var inputProblem= $('.problematique').val()
        var inputObjectif= $('.quelleObjectif').val()
        var inputManquer= $('.ChampManquer').val()
        var inputFormateur= $('.champFormateur').val()
        var inputAttein= $('.checkObjectif').val()
        var inputNote= $('.champNote').val()

        
        
        
        base('RESTIKO').create([
            {
              "fields": {
                "Date": inputDate,
                "Ce que j'ai aimé": inputAimer,
                "Ce que j'ai fait": inputFait,
                "Ce que j'ai appris": inputAppris,
                "Ce que j'ai utilisé de nouveaux": inputNouveau,
                "Problématiques  rencontrées": inputProblem,
                "Quels sont les objectifs ?": inputObjectif,
                "Qu'est-ce qui m'a manqué ?": inputManquer,
                "Qu'est-ce que tu ferais à la place du formateur ?": inputFormateur,
                "Objectif ?": inputAttein,
                "Note": inputNote
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});


    }

    
   