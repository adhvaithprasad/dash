

function open_commit_pane(){
  document.querySelector(".commit").style.display = "flex";
}

    var hash = window.location.hash.replace(/#/g, '');
var first = Math.floor(100000000 + Math.random() * 900000000);
var second = Math.floor(100000000 + Math.random() * 900000000);
var third = first+second;
var commitid= third*10;
const timestamp = Date.now();





function commit(){

const user = firebase.auth().currentUser;
    user.providerData.forEach((profile) => {
      
      const timestamp = Date.now();
      var hash = window.location.hash.replace(/#/g, '');
      var ref = firebase.database().ref(hash+"/commits/"+timestamp);

var commit_val = window.editor.getValue();
ref.set({
 commitid:commitid,
 commit: commit_val,
 
});



    });


}
