
$(document).ready(function(){
    heart();
});

function heart(){
  $("#post_photo").html("");
  $.each(postphoto, function(i,e){
     
      let photo = e.image;
     

      let project_div=`
      <span> 
      <img src="${photo}" alt="">
  </span>
            `
    $("#post_photo").append(project_div);
  })
}

