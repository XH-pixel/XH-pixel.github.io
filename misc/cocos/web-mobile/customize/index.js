window.onProgress = null;
window.onGameStarted = function(cc) {
  window._CCSettings = undefined;
  cc.view.resizeWithBrowserSize(true);
  var launchScene = "db://assets/Scenes/login.scene"; 
  // load scene
  cc.director.preloadScene(launchScene,onProgress,function(){
    cc.game.run()
    // cc.director.loadScene(launchScene,null,  function () {
    //   // cc.view.setDesignResolutionSize(960, 640, 4);
    //   // console.log("Success to load scene: ".concat(launchScene));
    //   cc.game.run()
    // });
  })
}
window.setLoadingDisplay = function  () {
  // Loading splash scene
  var splash = document.getElementById('splash');
  var progressBar = splash.querySelector('.progress-bar div');
  onProgress = function (finish, total) {
      var percent = 100 * finish / total;
      console.log(percent,'调用');
      if (progressBar) {
        console.log((-100 + Number(percent.toFixed(2)) ) + '%','-100 +  percent.toFixed(2) + '%'');
          progressBar.style.left = (-100 + Number(percent.toFixed(2)) ) + '%';
      }
  };
  splash.style.display = 'block';
  // progressBar.style.width = '0%';
  cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
      splash.style.display = 'none';
  });
}