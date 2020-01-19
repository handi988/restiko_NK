
var templateListe =
'<tr id="###articleId###">'+
    '<td class="text-center">###Date###</td>'+
    '<td class="text-center">###Titre###</td>'+
    '<td class="text-center linkTo test" onclick="displayArticle(\'###param###\')">Lire le Restiko</td>'+
'</tr>';

var restikoTemplate = 
'<div class="container text-center article ###articleId###">'+
    '<div class="row mt-2 font-weight-bold">'+
        '<div class="col">'+
            'Le Restiko du ###date###'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2 font-weight-bold">'+
        '<div class="col">'+
        'Ce que j\'ai fait'+
        '</div>'+
    '</div>'+
    '<div class="row">'+
        '<div class="col mt-2">'+
            '###Fait###'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2 font-weight-bold">'+
        '<div class="col">'+
        'Ce que j\'ai appris'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2">'+
        '<div class="col mt-2">'+
            '###appris###'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2 font-weight-bold">'+
        '<div class="col">'+
            'Ce que j\'ai aimer'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2">'+
        '<div class="col">'+
            '###aimer###'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2 font-weight-bold">'+
        '<div class="col">'+
            'Ce que j\'ai utilisé de nouveaux'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2">'+
        '<div class="col">'+
            '###nouveau###'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2 font-weight-bold">'+
        '<div class="col">'+
            'Problématique rencontrée'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2">'+
        '<div class="col">'+
            '###probleme###'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2 font-weight-bold">'+
        '<div class="col">'+
            'Quelle sont les objectifs'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2">'+
        '<div class="col">'+
            '###objectif###'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2 font-weight-bold">'+
        '<div class="col">'+
            'Qu\'est qui m\'as manquer?'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2">'+
        '<div class="col">'+
            '###manque###'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2 font-weight-bold">'+
        '<div class="col">'+
            'Obectif atteint ?'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2">'+
        '<div class="col">'+
            '###atteint###'+
        '</div>'+
    '</div>'+
    '<div class="row mt-2 font-weight-bold">'+
        '<div class="col">'+
            'Note '+
        '</div>'+
    '</div>'+
    '<div class="row mt-2">'+
        '<div class="col">'+
            '###note###'+
        '</div>'+
    '</div>'+
    '<div class="row" mt-4>'+
        '<div class="col">'+
            '<div class="linkTo" onclick="backlisting ()">Retour à la liste</div>'+
        '</div>'+
    

        '<div class="col">'+
        '<button id="modifResti" type="button" class="btn" data-toggle="modal" data-target="#modifiRestiko">Modification du restiko</button>'+
        '</div>'+
    '</div>'+
    
    
'</div>';


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
    // supprimer le restiko 
    function deleteRestiko(){
        base('RESTIKO').destroy([record.id], function(err, deletedRecords) {
            if (err) {
              console.error(err);
              return;
            }
            console.log('Deleted', deletedRecords.length, 'records');
          });
    }