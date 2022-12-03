require([
  "esri/WebScene",
  "esri/views/SceneView",
  "app/swiper",
  "app/syncUtil"
], function (WebScene, SceneView, swiper, syncUtil) {

  swiper.init();

  var websceneTop = new WebScene({
   portalItem: {
     id: "25c22be58337415e8ce8cab9fd7f1c67"
   }
  });

  var websceneBottom = new WebScene({
    portalItem: {
      id: "767199eae13548ec823534889afb71fe"
    }
  });

  var viewTop = new SceneView({
    container: "viewTop",
    map: websceneTop,
    environment: {
      lighting: {
        directShadowsEnabled: true,
        ambientOcclusionEnabled: false
      }
    }
  });

  var viewBottom = new SceneView({
    container: "viewBottom",
    map: websceneBottom,
    environment: {
      lighting: {
        directShadowsEnabled: true,
        ambientOcclusionEnabled: false
      }
    }
  });

  // Clear the top-left corner to make place for the title
  viewTop.ui.empty("top-left");
  viewBottom.ui.empty("top-left");

  // synchronize the two views
  syncUtil.syncViews(viewTop, viewBottom);

});
