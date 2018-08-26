// ARRAY OF FRIENDS
// =====================
function Friend (name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
}

var friend1 = new Friend ("Scout", "https://i.kinja-img.com/gawker-media/image/upload/s--WFkXeene--/c_scale,f_auto,fl_progressive,q_80,w_800/ol9ceoqxidudap8owlwn.jpg", [1,2,3,4,5,1,2,3,2,1]); 
var friend2 = new Friend ("Bandit", "https://amp.thisisinsider.com/images/5b50bd5351dfbe1f008b45c5-750-562.jpg", [2,1,2,3,4,5,2,1,2,2]); 
var friend3 = new Friend ("Snowball", "https://timedotcom.files.wordpress.com/2018/04/service-dogs-disneyland.jpg?quality=85", [2,2,3,4,5,1,2,3,3,3]); 
var friend4 = new Friend ("Thor", "https://cmeimg-a.akamaihd.net/640/cme/cuteness_data/s3fs-public/diy_blog/Why-Do-Dogs-Sleep-All-the-Time.jpg", [3,3,3,1,2,4,5,1,4,4]); 
var friend5 = new Friend ("Buddy", "https://boygeniusreport.files.wordpress.com/2018/03/beagle-dog.jpg?quality=98&strip=all&w=782", [4,2,4,4,1,2,5,1]); 
var friend6 = new Friend ("Oreo", "https://www.telegraph.co.uk/content/dam/science/2017/09/18/TELEMMGLPICT000004030356_trans_NvBQzQNjv4BqizCGo5q-4Qc44AnRTqw-Q3arlJPp5DhkRMotqfwg4vk.jpeg?imwidth=450", [5,5,4,3,2,1,2,3,5,5]); 
var friend7 = new Friend ("Patches", "https://123callingalldogs.com/wp-content/uploads/2017/11/slide-4-1900x825_t.jpg", [4,5,4,5,2,2,2,1,1,2]); 
var friend8 = new Friend ("Astro", "https://123callingalldogs.com/wp-content/uploads/2017/11/slide-4-1900x825_t.jpg", [2,1,2,2,2,4,5,1,2,3]); 
var friend9 = new Friend ("Scooby", "https://lh3.googleusercontent.com/m7uqFDVdbyIDgTUxpc6A01MugkUoUk34swM6crDoC03I4eRqma-BhaNi7dmuQukb-nLZYiQMgpwXJM6INg", [5,5,5,5,5,5,5,5,5,5]); 

var friendsData = []; 
friendsData.push(friend1, friend2, friend3, friend4, friend5, friend6, friend7, friend8, friend9); 

module.exports = friendsData; 