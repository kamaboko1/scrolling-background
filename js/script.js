


function yHandler() {

    // set offSetY to capture Y measurement
    let offSetY = window.pageYOffset.toFixed(0);

    /* Set measurements for each section.  Each section has a beginning and end.
       The reason is b/c if one scrolls quickly using a mouse, JS won't be able to catch a single
       number fast enough to envoke the transition.  By creating a gap of 250,
       JS is able to trigger the effect
    */
    let sec1_beginning = window.innerHeight;
    let sec1_end = sec1_beginning + 250;

    let sec2_beginning = sec1_beginning * 2;
    let sec2_end = sec2_beginning + 250;

    let sec3_beginning = sec1_beginning * 3;
    let sec3_end = sec3_beginning + 250;

    let sec4_beginning = sec1_beginning * 4;
    let sec4_end = sec4_beginning + 250;

    let sec5_beginning = sec1_beginning * 5;
    let sec5_end = sec5_beginning + 250;


    if(offSetY == 0){
        document.body.style.backgroundImage = "url('img/pic1.jpg')";
    }
    if(offSetY >= sec1_beginning && offSetY <= sec1_end){
        document.body.style.backgroundImage = "url('img/pic2.jpg')";
    }
    if(offSetY >= sec2_beginning && offSetY <= sec2_end){
        document.body.style.backgroundImage = "url('img/pic3.jpg')";
    }
    if(offSetY >= sec3_beginning && offSetY <= sec3_end){
        document.body.style.backgroundImage = "url('img/pic4.jpg')";
    }
    if(offSetY >= sec4_beginning && offSetY <= sec4_end){
        document.body.style.backgroundImage = "url('img/pic5.jpg')";
    }
    // if(offSetY >= sec5_beginning && offSetY <= sec5_end){
    //     document.body.style.backgroundImage = "url('/img/pic2.jpg')";
    // }
}

window.onscroll = yHandler;
document.body.style.backgroundImage = "url('img/pic1.jpg')";

var img2 = new Image();
    img2.onload = function() {
        document.getElementsByTagName('body').style.backgroundImage = "url('img/pic2.jpg')";
    };
img2.src = "url('img/pic2.jpg')";

var img3 = new Image();
    img3.onload = function() {
        document.getElementsByTagName('body').style.backgroundImage = "url('img/pic3.jpg')";
    };
img3.src = "url('img/pic2.jpg')";

var img4 = new Image();
    img4.onload = function() {
        document.getElementsByTagName('body').style.backgroundImage = "url('img/pic4.jpg')";
    };
img4.src = "url('img/pic2.jpg')";


















