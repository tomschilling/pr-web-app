/**
 * Created by Tom on 29.12.16.
 */


angular.module("InstitutionCRUDApp", ['ngRoute', 'isteven-multi-select'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "institutionlist.html",
                controller: "InstitutionController"
            })
            .when("/new/institution", {
                controller: "NewInstitutionController",
                templateUrl: "institution-form.html"
            })
            .when("/institution/:institutionId", {
                controller: "EditInstitutionController",
                templateUrl: "institution.html"
            })
            .otherwise({
                redirectTo: "/"
            })
    })



    // HTTP Req / Res zum Server mit REST
    .service("Institutionlist", function($http) {

        this.getAllInstitutions = function() {
            return $http.get('/institutionlist').
            then(function(response) {
                return response;
            }, function(response) {
                alert("Error finding Institutionlist.");
            });
        };


        this.createInstitution = function(institution) {
            return $http.post("/institutionlist", institution).
            then(function(response) {
                return response;
            }, function(response) {
                alert("Error creating institution.");
            });
        };


        this.getSingleInstitution = function(institutionId) {
            var url = "/institutionlist/" + institutionId;
            return $http.get(url).
            then(function(response) {
                return response;
            }, function(response) {
                alert("Error finding this Institution.");
            });
        };


        this.updateInstitution = function(institution) {
            console.log(institution);
            var url = "/institutionlist/" + institution.institutionIdPk;
            console.log(institution.institutionIdPk);
            return $http.put(url, institution).
            then(function(response) {
                return response;
            }, function(response) {
                alert("Error editing this Institution.");
                console.log(response);
            });
        };


        this.deleteInstitution = function(institutionId) {
            var url = "/institutionlist/" + institutionId;
            return $http.delete(url).
            then(function(response) {
                return response;
            }, function(response) {
                alert("Error deleting this Institution.");
                console.log(response);
            });
        }
    })


    // Show/Filter Institutionlist
    .controller("InstitutionController", function($scope, $http) {



        // Mutltiselect KvRegion
        $scope.KvSelect = [
            {
                name: '<strong>Alle KV Region</strong>',
                msGroup: true
            },
            {
                name: '<strong>Norden</strong>',
                msGroup: true
            },
            {
                name: 'Berlin',
                ticked: false
            },
            {
                name: 'Brandenburg',
                ticked: false
            },
            {
                name: 'Bremen',
                ticked: false
            },
            {
                name: 'Hamburg',
                ticked: false
            },
            {
                name: 'Mecklenburg-Vorpommern',
                ticked: false
            },
            {
                name: 'Niedersachsen',
                ticked: false
            },
            {
                name: 'Sachsen-Anhalt',
                ticked: false
            },
            {
                name: 'Schleswig-Holstein',
                ticked: false
            },
            {
                msGroup: false
            },
            {
                name: '<strong>Mitte</strong>',
                msGroup: true
            },
            {
                name: 'Hessen',
                ticked: false
            },
            {
                name: 'Nordrhein',
                ticked: false
            },
            {
                name: 'Sachsen',
                ticked: false
            },
            {
                name: 'Thüringen',
                ticked: false
            },
            {
                name: 'Westfalen',
                ticked: false
            },
            {
                msGroup: false
            },
            {
                name: '<strong>Süden</strong>',
                msGroup: true
            },
            {
                name: 'Baden-Württemberg',
                ticked: false
            },
            {
                name: 'Bayern',
                ticked: false
            },
            {
                name: 'Rheinland-Pfalz',
                ticked: false
            },
            {
                name: 'Saarland',
                ticked: false
            },
            {
                msGroup: false
            },
            {
                msGroup: false
            }
        ];



        // Mutltiselect PLZ
        $scope.PLZ = [
            {
                name: '<strong>Alle PLZ</strong>',
                msGroup: true
            },
            {
                name: '<strong>0</strong>',
                msGroup: true
            },
            {
                name: '00',
                ticked: false
            },
            {
                name: '01',
                ticked: false
            },
            {
                name: '02',
                ticked: false
            },
            {
                name: '03',
                ticked: false
            },
            {
                name: '04',
                ticked: false
            },
            {
                name: '05',
                ticked: false
            },
            {
                name: '06',
                ticked: false
            },
            {
                name: '07',
                ticked: false
            },
            {
                name: '08',
                ticked: false
            },
            {
                name: '09',
                ticked: false
            },
            {
                msGroup: false
            },
            {
                name: '<strong>1</strong>',
                msGroup: true
            },
            {
                name: '10',
                ticked: false
            },
            {
                name: '11',
                ticked: false
            },
            {
                name: '12',
                ticked: false
            },
            {
                name: '13',
                ticked: false
            },
            {
                name: '14',
                ticked: false
            },
            {
                name: '15',
                ticked: false
            },
            {
                name: '16',
                ticked: false
            },
            {
                name: '17',
                ticked: false
            },
            {
                name: '18',
                ticked: false
            },
            {
                name: '19',
                ticked: false
            },
            {
                msGroup: false
            },
            {
                name: '<strong>2</strong>',
                msGroup: true
            },
            {
                name: '20',
                ticked: false
            },
            {
                name: '21',
                ticked: false
            },
            {
                name: '22',
                ticked: false
            },
            {
                name: '23',
                ticked: false
            },
            {
                name: '24',
                ticked: false
            },
            {
                name: '25',
                ticked: false
            },
            {
                name: '26',
                ticked: false
            },
            {
                name: '27',
                ticked: false
            },
            {
                name: '28',
                ticked: false
            },
            {
                name: '29',
                ticked: false
            },
            {
                msGroup: false
            },
            {
                name: '<strong>3</strong>',
                msGroup: true
            },
            {
                name: '30',
                ticked: false
            },
            {
                name: '31',
                ticked: false
            },
            {
                name: '32',
                ticked: false
            },
            {
                name: '33',
                ticked: false
            },
            {
                name: '34',
                ticked: false
            },
            {
                name: '35',
                ticked: false
            },
            {
                name: '36',
                ticked: false
            },
            {
                name: '37',
                ticked: false
            },
            {
                name: '38',
                ticked: false
            },
            {
                name: '39',
                ticked: false
            },
            {
                msGroup: false
            },
            {
                name: '<strong>4</strong>',
                msGroup: true
            },
            {
                name: '40',
                ticked: false
            },
            {
                name: '41',
                ticked: false
            },
            {
                name: '42',
                ticked: false
            },
            {
                name: '43',
                ticked: false
            },
            {
                name: '44',
                ticked: false
            },
            {
                name: '45',
                ticked: false
            },
            {
                name: '46',
                ticked: false
            },
            {
                name: '47',
                ticked: false
            },
            {
                name: '48',
                ticked: false
            },
            {
                name: '49',
                ticked: false
            },
            {
                msGroup: false
            },
            {
                name: '<strong>5</strong>',
                msGroup: true
            },
            {
                name: '50',
                ticked: false
            },
            {
                name: '51',
                ticked: false
            },
            {
                name: '52',
                ticked: false
            },
            {
                name: '53',
                ticked: false
            },
            {
                name: '54',
                ticked: false
            },
            {
                name: '55',
                ticked: false
            },
            {
                name: '56',
                ticked: false
            },
            {
                name: '57',
                ticked: false
            },
            {
                name: '58',
                ticked: false
            },
            {
                name: '59',
                ticked: false
            },
            {
                msGroup: false
            },
            {
                name: '<strong>6</strong>',
                msGroup: true
            },
            {
                name: '60',
                ticked: false
            },
            {
                name: '61',
                ticked: false
            },
            {
                name: '62',
                ticked: false
            },
            {
                name: '63',
                ticked: false
            },
            {
                name: '64',
                ticked: false
            },
            {
                name: '65',
                ticked: false
            },
            {
                name: '66',
                ticked: false
            },
            {
                name: '67',
                ticked: false
            },
            {
                name: '68',
                ticked: false
            },
            {
                name: '69',
                ticked: false
            },
            {
                msGroup: false
            },
            {
                name: '<strong>7</strong>',
                msGroup: true
            },
            {
                name: '70',
                ticked: false
            },
            {
                name: '71',
                ticked: false
            },
            {
                name: '72',
                ticked: false
            },
            {
                name: '73',
                ticked: false
            },
            {
                name: '74',
                ticked: false
            },
            {
                name: '75',
                ticked: false
            },
            {
                name: '76',
                ticked: false
            },
            {
                name: '77',
                ticked: false
            },
            {
                name: '78',
                ticked: false
            },
            {
                name: '79',
                ticked: false
            },
            {
                msGroup: false
            },
            {
                name: '<strong>8</strong>',
                msGroup: true
            },
            {
                name: '80',
                ticked: false
            },
            {
                name: '81',
                ticked: false
            },
            {
                name: '82',
                ticked: false
            },
            {
                name: '83',
                ticked: false
            },
            {
                name: '84',
                ticked: false
            },
            {
                name: '85',
                ticked: false
            },
            {
                name: '86',
                ticked: false
            },
            {
                name: '87',
                ticked: false
            },
            {
                name: '88',
                ticked: false
            },
            {
                name: '89',
                ticked: false
            },
            {
                msGroup: false
            },
            {
                name: '<strong>9</strong>',
                msGroup: true
            },
            {
                name: '90',
                ticked: false
            },
            {
                name: '91',
                ticked: false
            },
            {
                name: '92',
                ticked: false
            },
            {
                name: '93',
                ticked: false
            },
            {
                name: '94',
                ticked: false
            },
            {
                name: '95',
                ticked: false
            },
            {
                name: '96',
                ticked: false
            },
            {
                name: '97',
                ticked: false
            },
            {
                name: '98',
                ticked: false
            },
            {
                name: '99',
                ticked: false
            },
            {
                msGroup: false
            },
            {
                msGroup: false
            },
            {
                msGroup: false
            }
        ];



        // Mutltiselect Fächergruppen
        $scope.Fachergruppen = [
            {
                name: '<strong>Alle Fächergruppen</strong>',
                msGroup: true
            },
            {
                name: '<strong>Häufig verwendet</strong>',
                msGroup: true
            },
            {       name: "Hausarzt",                  ticked: false  },
            {       name: "Internist ohne SP",                  ticked: false },
            {
                msGroup: false
            },
            {
                name: '<strong>Internist mit SP</strong>',
                msGroup: true
            },
            {       name: "Endokronologie",                   ticked: false },
            {       name: "Gastroenterologie",              ticked: false },
            {       name: "Hämatologie/Onkologie",          ticked: false  },
            {       name: "Infektiologie",                  ticked: false  },
            {       name: "Kardiologie",                  ticked: false },
            {       name: "Nephrologie",                   ticked: false },
            {       name: "Pulmologie",              ticked: false },
            {       name: "Rheumatologie",          ticked: false  },
            {
                msGroup: false
            },
            {
                name: '<strong>Fachgruppen</strong>',
                msGroup: true
            },
            {       name: "Anästhesiologie",                   ticked: false },
            {       name: "Augenheilkunde",              ticked: false },
            {       name: "Chirurgie",          ticked: false  },
            {       name: "Infektiologie",                  ticked: false  },
            {       name: "Dermatologie",                  ticked: false },
            {       name: "Gynäkologie",                   ticked: false },
            {       name: "HNO",              ticked: false },
            {       name: "Humangenetik",          ticked: false  },
            {       name: "Jugendpsychiatrie und- psychologie",                  ticked: false  },
            {       name: "Labormedizin",                  ticked: false },
            {       name: "Mikrobiologie",                   ticked: false },
            {       name: "MKG",              ticked: false },
            {       name: "Neurochirurgie",          ticked: false  },
            {       name: "Neurologie und Psychiatrie",                  ticked: false  },
            {       name: "Nuklearmedizin",                  ticked: false },
            {       name: "Orthopädie",                   ticked: false },
            {       name: "Pädiatrie",              ticked: false },
            {       name: "Pathologie",          ticked: false  },
            {       name: "Physikal. u. rehabil. Medizin",                  ticked: false },
            {       name: "Psychiatrie und Psychologie",                   ticked: false },
            {       name: "Radiologie",              ticked: false },
            {       name: "Schmerztherapie",          ticked: false  },
            {       name: "Strahlentherapie",                  ticked: false  },
            {       name: "Transfusionsmedizin",                  ticked: false },
            {       name: "Urologie",                   ticked: false },
            {       name: "Zahnarzt",              ticked: false },
            {
                msGroup: false
            },
            {
                msGroup: false
            }
        ];



        // Mutltiselect Ausrichtung
        $scope.Ausrichtung = [
            {       name: "Fachgleich",               ticked: false },
            {       name: "Fachversorger",               ticked: false },
            {       name: "Grundversorger",          ticked: false  },
            {       name: "Spezial",                        ticked: false },
            {       name: "Vollversorger",               ticked: false },
        ];

       
       
        // Mutltiselect ArtztAnzahl
        $scope.ArztAnzahl = [
            {       name: "0,5",          ticked: false  },
            {       name: "1",               ticked: false },
            {       name: "1,5",                        ticked: false }
        ];


        
        

        //Filter Button
        $scope.onFilterClick = function() {
            var parameters = {};

            console.log($scope.outputKv, $scope.outputPLZ, $scope.outputFachergruppen, $scope.outputTrager );


            //Get the data from Multiselect KvRegion
            parameters['institutionKvRegion'] = parameters['institutionKvRegion'] || [];
            angular.forEach( $scope.outputKv, function( value, key ) {
                // Need to set multiple values
                if (value.ticked) {
                    parameters['institutionKvRegion'].push(value.name);
                }
            });

            //Get the data from Multiselect PLZ
            parameters['institutionPLZ'] = parameters['institutionPLZ'] || [];
            angular.forEach( $scope.outputPLZ, function( value, key ) {
                if (value.ticked) {
                    parameters['institutionPLZ'].push(value.name+'%');
                }
            });

            //Get the data from Multiselect Fächergruppe
            parameters['institutionFachgruppe'] = parameters['institutionFachgruppe'] || [];
            angular.forEach( $scope.outputFachergruppe, function( value, key ) {
                if (value.ticked) {
                    parameters['institutionFachgruppe'].push(value.name);
                }
            });

            //Get the data from Multiselect Ausrichtung
            parameters['institutionAusrichtung'] = parameters['institutionAusrichtung'] || [];
            angular.forEach( $scope.outputAusrichtung, function( value, key ) {
                if (value.ticked) {
                    parameters['institutionAusrichtung'].push(value.name);
                }
            });

            angular.forEach( $scope.outputArztAnzahl, function( value, key ) {
                console.log(value.name)
            });

            $http.get('/institutionlist', {params: parameters}).
            then(function(response) {
                $scope.institutionlist = response.data;
            }, function(response) {
                alert("Error finding Institutionlist.");
            });

        };

        
        $scope.onSelectEmailClick = function () {
            $scope.institutionlist.forEach(function(e) {
                if (e.institutionEmail != '') {
                    e.checked = true;
                }
            })
        };
        
        

        $scope.onSendEmailClick = function () {
            var institutions = $scope.institutionlist.filter(function(e) {
                    return e.checked;
            }).map(function(e) {
                return e.institutionEmail;
            });

            location.href= 'mailto:' + 'buero@bmvz.de' + '?cc=' + '&bcc=' + institutions.join('; ') + ';';



        };


        $scope.isEditing = false;


        $scope.onEditClick = function(institution) {


            $scope.isEditing = true;

            console.log(institution.institutionIdPk);

            $scope.isEditing = $scope.institutionlist.indexOf(institution);

            institution.updatedInstitutionName = institution.InstitutionName;
            institution.updatedInstitutionEmail = institution.InstitutionEmail;
            institution.updatedInstitutionNumber = institution.InstitutionNumber;
        };




        $scope.onCancelClick = function() {
            $scope.isEditing = false;
        };


        $scope.onSaveClick = function(institution) {
            institution.InstitutionName = institution.updatedInstitutionName;
            institution.InstitutionEmail = institution.updatedInstitutionEmail;
            institution.InstitutionNumber = institution.updatedInstitutionNumber;
            $scope.isEditing = false;
            Institutionlist.updateInstitution(institution);
        };
        
    })



    // Add a New Institution
    .controller("NewInstitutionController", function($scope, $location, Institutionlist) {
        $scope.back = function() {
            $location.path("#/");
        };

        $scope.saveInstitution = function(institution) {
            Institutionlist.createInstitution(institution).then(function(doc) {
                var institutionUrl = "/institution/" + doc.data._id;
                $location.path(institutionUrl);
            }, function(response) {
                alert(response);
            });
        };

        $scope.fachgruppen = [ "Hausarzt",
            "Innere Medizin",
            "Angiologie",
            "Diabetologie",
            "Endokronologie",
            "Gastroenterologie",
            "Hämatologie/Onkologie",
            "Infektiologie",
            "Kardiologie",
            "Nephrologie",
            "Pulmologie",
            "Rheumatologie",
            "Anästhesiologie",
            "Augenheilkunde",
            "Chirurgie",
            "Dermatologie",
            "Gynäkologie",
            "HNO",
            "Humangenetik",
            "Jugendpsychiatrie und- psychologie",
            "Labormedizin",
            "Mikrobiologie",
            "MKG",
            "Neurochirurgie",
            "Neurologie und Psychiatrie",
            "Nuklearmedizin",
            "Orthopädie",
            "Pädiatrie",
            "Pathologie",
            "Physikal. u. rehabil. Medizin",
            "Psychiatrie und Psychologie",
            "Radiologie",
            "Schmerztherapie",
            "Strahlentherapie",
            "Transfusionsmedizin",
            "Urologie",
            "Zahnarzt"]
    })



    //Edit an Institution
    .controller("EditInstitutionController", function($scope, $routeParams, Institutionlist) {
        Institutionlist.getSingleInstitution($routeParams.institutionId).then(function(doc) {
            $scope.institution = doc.data;
            console.log(doc.data);
        }, function(response) {
            alert(response);
        });


        $scope.toggleEdit = function() {
            $scope.editMode = true;
            $scope.institutionFormUrl = "institution-form.html";
        };

        $scope.back = function() {
            $scope.editMode = false;
            $scope.institutionFormUrl = "";
            window.history.back();
        };

        $scope.saveInstitution = function(institution) {
            Institutionlist.updateInstitution(institution);
            $scope.editMode = false;
            $scope.institutionFormUrl = "";
        };

        $scope.deleteInstitution = function(institutionId) {
            Institutionlist.deleteInstitution(institutionId);
        }

    });



