function open_commit_pane() {
  document.querySelector(".commit").style.display = "flex";
}

var hash = window.location.hash.replace(/#/g, '');

function commit() {

  const user = firebase.auth().currentUser;
  user.providerData.forEach((profile) => {
    var first = Math.floor(100000000 + Math.random() * 900000000);
    var second = Math.floor(100000000 + Math.random() * 900000000);
    var third = first + second;
    var commitid = third * 10;
    const timestamp = Date.now();
    var ref = firebase.database().ref(hash + "/xommits/" + timestamp);
    var author = profile.displayName;
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const mail = profile.email;
    var commit_val = window.editor.getValue();
    var value = $("#commit-message").val();
    console.log(value);
    ref.set({
      commitid: commitid,
      commit: commit_val,
      authorDisplayName: author,
      authorMail: mail,
      minute: minutes,
      hour: hours,
      date: day,
      month: month,
      year: year,
      message: value
    });



  });


}
var readRef = firebase.database().ref(hash+"/xommits");
readRef.on('child_added',(snapshot) => {
const value = snapshot.val();
console.log(value);
const template = "<div class='commit-wrapper'><div class='line'></div><div class='inner-wrapper'><p class='message'>"+value.message+"</p><p class='author'>"+value.authorDisplayName+"</p><p class='date'>"+value.date+' '+value.month+' '+' '+value.year+'< '+value.hour+':'+value.minute+"><p class='mail'> "+value.authorMail+"</p><p class='id'>"+value.commitid+"</p></div></div>" ;
document.getElementById('commit').innerHTML += template;
});