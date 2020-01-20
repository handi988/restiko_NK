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