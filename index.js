






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


   
    
   $(".js-treeview").on("click", "#class"
    , function() {
      treeview.addSubLevel($(this));
      treeview.resetBtnToggle();
     
    });
      
  
    
  });
  
