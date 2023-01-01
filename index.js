let index=0;
var quests= ['Quest 1', 'Quest 2 ','Quest 3']
function newQuote() {
document.getElementById("last").innerHTML=quests[index];
index = index >= quests.length - 1 ? 0 : index + 1;

}






$(function() {
    let treeview = {
      resetBtnToggle: function() {
        $(".js-treeview")
          .find(".level-add")
          .find("span")
          .removeClass()
          .addClass("fa fa-plus");
        $(".js-treeview")
          .find(".level-add")
          .siblings()
          .removeClass("in");
      },
      
      addSubLevel: function(target) {
        let liElm = target.closest("li");
        let nextLevelCodeASCII = liElm.find("[data-level]").attr("data-level").charCodeAt(0) + 1;
        liElm.children("ul").append($("#levelMarkup").html());
        liElm.children("ul").find("[data-level]")
          .attr("data-level", String.fromCharCode(nextLevelCodeASCII));
      },
     
    };
  
    // Treeview Functions
    $(".js-treeview").on("click", ".level-add", function() {
      $(this).find("span").toggleClass("fa-plus").toggleClass("fa-times text-danger");
      $(this).siblings().toggleClass("in");
    });
  
  
  
    // Add sub level
    $(".js-treeview").on("click", "#knightclass"
    , function() {
      treeview.addSubLevel($(this));
      // treeview.resetBtnToggle();

      document.getElementById("last").innerHTML=quests[index];
      index = index >= quests.length - 1 ? 0 : index + 1;
      
     
    
    });

   
    
    $(".js-treeview").on("click", "#healerclass"
    , function() {
      treeview.addSubLevel($(this));
      treeview.resetBtnToggle();
      alert("you started healer quest")
    });
      
  
    
  });
  
