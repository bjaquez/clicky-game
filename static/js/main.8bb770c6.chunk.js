(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://static.tvtropes.org/pmwiki/pub/images/SusieCarmichael_7568.jpg"},{id:2,image:"https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/41941/1534780570-13471-7401/Angeilca.jpg"},{id:3,image:"https://vignette.wikia.nocookie.net/degrassi/images/b/b6/Chuckie.jpg/revision/latest?cb=20140601200928"},{id:4,image:"https://vignette.wikia.nocookie.net/rugratseries/images/3/30/Kimi.jpg/revision/latest?cb=20110202050505"},{id:5,image:"https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/41943/1534781482-10441-8607/Lil.jpg"},{id:6,image:"https://i.pinimg.com/236x/43/4e/b1/434eb12031714527d3a7185a72dc852e--s-nostalgia-rugrats.jpg"},{id:7,image:"https://static.tvtropes.org/pmwiki/pub/images/DilPickles_7163.jpg"},{id:8,image:"https://static.miraheze.org/allthetropeswiki/9/97/TommyPickles_2933.jpg"},{id:9,image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/chas-rugrats-tales-from-the-crib-snow-white--7.13.jpg"},{id:10,image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/stu-pickles-rugrats-adventure-game-80.jpg"},{id:11,image:"http://cust.idl.com.au/boyd/images/bdidi.gif"},{id:12,image:"https://vignette.wikia.nocookie.net/rugrats/images/1/12/Reptar_Doll.png/revision/latest?cb=20170916134927"}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),c=a(3),o=a.n(c),n=(a(14),a(4)),r=a(5),l=a(7),m=a(6),g=a(8),d=a(1),h=(a(16),function(e){return s.a.createElement("div",{className:"pics"},s.a.createElement("img",{className:"img-fluid",onClick:e.click,alt:e.id,src:e.image,id:e.id}))}),p=(a(18),function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={score:0,images:d,clicked:[],highScore:0},a.setclicked=function(e){a.state.clicked.indexOf(e.target.id)<0?(a.setState({clicked:a.state.clicked.concat(e.target.id)}),a.setState({score:a.state.score+1}),a.setState({guess:!0}),console.log(a.state.clicked.length+1),console.log(d.length)):(a.state.score>a.state.highScore&&a.setState({highScore:a.state.score}),a.setState({guess:!1}),a.setState({score:0}),a.setState({clicked:[]})),console.log(a.state.clicked),console.log(a.state.score)},a.shuffle=function(e){a.setclicked(e);var t=a.state.images.sort(function(){return.5-Math.random()});a.setState({images:t})},a}return Object(g.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t=this;e=this.state.guess?s.a.createElement("span",{className:"title-middle"},"Good Choice!"):!1===this.state.guess?s.a.createElement("span",{className:"title-middle"},"Oops... You Lost!"):s.a.createElement("span",{className:"title-middle"},"Click an Image to Start!"),this.state.clicked.length===d.length&&(alert("You win!"),this.setState({clicked:[]}),this.state.score>this.state.highScore&&this.setState({highScore:this.state.score}),this.setState({score:0}));var a=this.state.images.map(function(e){return s.a.createElement(h,{id:e.id,key:e.id,image:e.image,click:t.shuffle})});return s.a.createElement("div",null,s.a.createElement("div",{className:"topbar"},e," ",s.a.createElement("span",{className:"badge badge-pill badge-success"},"Your Score: ",this.state.score," Highest Score: ",this.state.highScore)),s.a.createElement("div",null,s.a.createElement("div",{class:"jumbotron jumbotron-fluid"},s.a.createElement("div",{class:"container jumbo-inside"},s.a.createElement("h1",{class:"display-4"},"Clicky Game"),s.a.createElement("p",{class:"lead"},"Click on an image to earn points. Only click on each image once."))),s.a.createElement("div",{className:"row pic-row"},s.a.createElement("div",{className:"col-lg-12 pic-div"},a))),s.a.createElement("div",{className:"botbar"}))}}]),t}(i.Component));o.a.render(s.a.createElement(p,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.8bb770c6.chunk.js.map