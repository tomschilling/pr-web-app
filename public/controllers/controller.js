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
                name: 'KV Berlin',
                ticked: false
            },
            {
                name: 'KV Brandenburg',
                ticked: false
            },
            {
                name: 'KV Bremen',
                ticked: false
            },
            {
                name: 'KV Hamburg',
                ticked: false
            },
            {
                name: 'KV Mecklenburg-Vorpommern',
                ticked: false
            },
            {
                name: 'KV Niedersachsen',
                ticked: false
            },
            {
                name: 'KV Sachsen-Anhalt',
                ticked: false
            },
            {
                name: 'KV Schleswig-Holstein',
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
                name: 'KV Hessen',
                ticked: false
            },
            {
                name: 'KV Nordrhein',
                ticked: false
            },
            {
                name: 'KV Sachsen',
                ticked: false
            },
            {
                name: 'KV Thüringen',
                ticked: false
            },
            {
                name: 'KV Westfalen',
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
                name: 'KV Baden-Württemberg',
                ticked: false
            },
            {
                name: 'KV Bayern',
                ticked: false
            },
            {
                name: 'KV Rheinland-Pfalz',
                ticked: false
            },
            {
                name: 'KV Saarland',
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
                name: '01...',
                ticked: false
            },
            {
                name: '02...',
                ticked: false
            },
            {
                name: '03...',
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
                name: '10115',
                ticked: false
            },
            {
                name: '10117',
                ticked: false
            },
            {
                name: '10178',
                ticked: false
            },
            {
                name: '10179',
                ticked: false
            },
            {
                name: '10243',
                ticked: false
            },
            {
                name: '10245',
                ticked: false
            },
            {
                name: '10247',
                ticked: false
            },
            {
                name: '10247',
                ticked: false
            },
            {
                name: '10623',
                ticked: false
            },
            {
                name: '10245',
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
                name: '20...',
                ticked: false
            },
            {
                name: '21...',
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
                name: '30...',
                ticked: false
            },
            {
                name: '31...',
                ticked: false
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
                name: '<strong>Gruppe 1</strong>',
                msGroup: true
            },
            {       name: "Hausarzt",                  ticked: false  },
            {       name: "Innere Medizin",                  ticked: false },
            {
                msGroup: false
            },
            {
                name: '<strong>Gruppe 2</strong>',
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
            {       name: "Hausarzt",                  ticked: false  },
            {       name: "Innere Medizin",                  ticked: false },
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
                name: '<strong>Gruppe 3</strong>',
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
            {       name: "Grundversorger",          ticked: false  },
            {       name: "Fachgleich",               ticked: false },
            {       name: "Spezial",                        ticked: false }
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
                    parameters['institutionPLZ'].push(value.name);
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



