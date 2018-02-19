"use strict";!function(){function i(i,a){i.html5Mode(!0),a.debugEnabled(!0)}function a(i,a){i.state("home",{url:"/",component:"home"}),a.otherwise("/")}function e(i,a,e){e.keys=Object.keys,a.get("/assets/data/resume.json").then(function(i){return e.resume=i.data}).catch(function(){return i.error("Failed to load resume.")})}a.$inject=["$stateProvider","$urlRouterProvider"],i.$inject=["$locationProvider","$logProvider"],e.$inject=["$log","$http","$rootScope"],angular.module("app",["ui.router","duScroll"]).config(a).config(i).run(e)}(),function(){angular.module("app").directive("home",function(){return{controller:"HomeController",controllerAs:"hc",templateUrl:"app/home/home.html"}})}(),function(){function i(i,a,e){this.scrollTo=function(i){a.scrollToElementAnimated(angular.element(document.getElementById(i)))},$(".button-collapse").sideNav()}i.$inject=["$log","$document","$location"],angular.module("app").controller("HomeController",i)}(),angular.module("app").run(["$templateCache",function(i){i.put("app/home/home.html",'<div class=home><header><nav><ul id=slide-out class="side-nav fixed"><li><div class=userView><img class=circle src={{resume.profile}}><div class=iconized-info-panel><div class="white-text iconized-info"><span class=icon><i class=material-icons>person</i></span><b>{{resume.name}}</b></div><div class="white-text iconized-info"><span class=icon><i class=material-icons>email</i></span>{{resume.email}}</div><div class="white-text iconized-info"><span class=icon><i class=material-icons>today</i></span>{{resume.dateOfBirth}}</div><div class="white-text iconized-info"><span class=icon><i class=material-icons>my_location</i></span>{{resume.location}}</div></div></div></li><li><a class="waves-effect waves-secondary" ng-click="hc.scrollTo(\'summary\')"><i class=material-icons>contact_mail</i>Summary</a></li><li><a class="waves-effect waves-secondary" ng-click="hc.scrollTo(\'education\')"><i class=material-icons>school</i>Education</a></li><li><a class="waves-effect waves-secondary" ng-click="hc.scrollTo(\'research\')"><i class=material-icons>content_paste</i>Research</a></li><li><a class="waves-effect waves-secondary" ng-click="hc.scrollTo(\'publications\')"><i class=material-icons>library_books</i>Publications</a></li><li><a class="waves-effect waves-secondary" ng-click="hc.scrollTo(\'cv\')"><i class=material-icons>insert_drive_file</i>Curriculum Vitae</a></li><li><div class=divider></div></li><li><a class=subheader>Social</a></li>\x3c!-- Had to use font awesome, since MaterialIcons do not have social icons--\x3e<li><a class="waves-effect waves-secondary" ng-href={{resume.twitter}}><i class="fa fa-lg fa-twitter"></i>Twitter</a></li><li><a class="waves-effect waves-secondary" ng-href={{resume.github}}><i class="fa fa-lg fa-github"></i>Github</a></li><li><a class="waves-effect waves-secondary" ng-href={{resume.linkedin}}><i class="fa fa-lg fa-linkedin"></i>LinkedIn</a></li><li><a class="waves-effect waves-secondary" ng-href={{resume.googleScholar}}><i class="ai ai-lg ai-google-scholar"></i>Google Scholar</a></li><li><a class="waves-effect waves-secondary" ng-href={{resume.researchGate}}><i class="ai ai-lg ai-researchgate"></i>Research Gate</a></li></ul><a href=# data-activates=slide-out class=button-collapse><i class=material-icons>menu</i></a></nav></header><main><div class=container><div id=summary class="row section scrollspy"><div class="col s12"><h1>Summary</h1><div class=card-panel><p class=caption>{{ resume.summary }}</p></div></div></div><div id=education class="row section scrollspy"><div class="col s12"><h1>Education</h1><div class=timeline><div class=timeline-event ng-repeat="entry in resume.education"><div class="card timeline-content"><div class="card-image waves-effect waves-block waves-light"><img class=activator src="{{ entry.image }}"></div><div class=card-content><span class="card-title activator grey-text text-darken-4">{{entry.title}} <i class="material-icons right">more_vert</i></span><p>{{entry.institution}}</p><p><b>{{entry.startDate}} &mdash; {{entry.endDate}}</b></p></div><div class=card-reveal><span class="card-title grey-text text-darken-4">{{entry.title}} <i class="material-icons right">close</i></span><div class=iconized-info-panel><div class=iconized-info><span class=icon><i class=material-icons>account_balance</i></span>{{entry.institution}}</div><div class=iconized-info><span class=icon><i class=material-icons>place</i></span>{{entry.location}}</div><div class=iconized-info><span class=icon><i class=material-icons>event</i></span>{{entry.startDate}} &mdash; {{entry.endDate}}</div><p>{{entry.description}}</p></div></div></div><div class="timeline-badge white-text"><i class=material-icons>school</i></div></div></div></div></div><div id=research class="row section scrollspy"><h1>Research</h1><div class="card-panel under-construction"><h2><i class=material-icons>warning</i></h2><h2>Under construction!</h2></div></div><div id=publications class="row section scrollspy"><h1>Publications</h1><div class="card-panel under-construction"><h2><i class=material-icons>warning</i></h2><h2>Under construction!</h2></div></div><div id=cv class="row section scrollspy"><div class=curriculum-vitae><h1>Curriculum Vitae</h1><a target=_self href=/assets/file/cv.pdf download=asjacobs-cv.pdf class="waves-effect waves-secondary btn"><i class="material-icons left">file_download</i>Download</a></div></div><div></div></div></main></div>')}]);
//# sourceMappingURL=../maps/scripts/app-d288b3fe95.js.map
