// page fade
document.body.className += " fade-out";
$(function() {
  $("body").removeClass("fade-out");
});

// startup sound
document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('audio');
  var playButton = document.getElementById('playButton');

  playButton.addEventListener('click', function() {
    playButton.disabled = true; // Disable the button after it is clicked
    audio.play();
  });
});

// dropdownDiv and click sounds
document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('audio_meow');
  var dropdownDiv = document.getElementById('dropdownDiv');
  var buttons = dropdownDiv.getElementsByTagName('button');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      audio.currentTime = 0;
      var playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(function() {
          // Audio started playing successfully
        }).catch(function(error) {
          // Audio playback failed or was blocked
          console.log('Audio playback failed:', error);
        });
      }
    });
  }
});

// Glitch effect
// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Set the glitch effect every 5 seconds
  setInterval(function() {
    var glitchContainer = document.querySelector('.glitch-container');
    var glitchEffect = document.createElement('div');
    glitchEffect.classList.add('glitch-effect');
    glitchContainer.appendChild(glitchEffect);

    // Remove the glitch effect after a short delay
    setTimeout(function() {
      glitchContainer.removeChild(glitchEffect);
    }, 1000);
  }, 5000);
});

// Cat walk
$(document).ready(function() {
  var direction = 1;  /* 1 = right, -1 = left */

  function walk(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    var catX = $('#cat').position().left;
    var catY = $('#cat').position().top;
    var catWidth = $('#cat').width();
    var catHeight = $('#cat').height();

    // Determine the direction the cat should move based on the mouse's position
    if (mouseX < catX) {
      direction = -1;
    } else if (mouseX > catX + catWidth) {
      direction = 1;
    }

    // Move the cat horizontally
    $('#cat').css('left', catX + direction * 0 + 'px');  /* Adjust the '5' to change the speed */
    $('#cat').css('transform', 'scaleX(' + direction + ')');  /* Flip the cat */

    // // Move the cat vertically
    if (mouseY < catY) {
      $('#cat').css('top', catY - 1 + 'px');  /* Adjust the '5' to change the speed */
    } else if (mouseY > catY + catHeight) {
      $('#cat').css('top', catY + 1 + 'px');  /* Adjust the '5' to change the speed */
    }
  }

  $(document).mousemove(walk);  /* Update the cat's position whenever the mouse moves */
});

let idleTimer = null;
let idleState = false;

window.addEventListener('mousemove', function() {
  clearTimeout(idleTimer);

  if (idleState == true) {
    // The user has moved the mouse, stop the cat from moving
    stopCat();
  }

  idleState = false;

  idleTimer = setTimeout(function() {
    // The user has been idle for 3 seconds, start the cat moving
    idleState = true; 
    moveCat();
  }, 300);
});

function moveCat() {
  let cat = document.getElementById('cat');
  let maxX = window.innerWidth - cat.offsetWidth;
  let maxY = window.innerHeight - cat.offsetHeight;
  let randomX = Math.floor(Math.random() * maxX);
  let randomY = Math.floor(Math.random() * maxY);

  cat.style.left = randomX + 'px';
  cat.style.top = randomY + 'px';

  // Move cat again after transition ends
  cat.addEventListener('transitionend', function() {
    moveCat();
  }, { once: true });
}

function stopCat() {
  let cat = document.getElementById('cat');
  cat.style.left = cat.offsetLeft + 'px';
  cat.style.top = cat.offsetTop + 'px';
}


// button effects

// button to copy text
function copy_button() {
  /* Get the text field */
  var copyText = document.getElementById("stuff_to_copy");

  /* Select the text field */
  copyText.select();
  copyText.onclick;
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("press Windows key + R, paste the link in, and press enter");
}
function copy_button2() {
  /* Get the text field */
  var copyText = document.getElementById("stuff_to_copy2");

  /* Select the text field */
  copyText.select();
  copyText.onclick;
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("press Windows key + R, paste the link in, and press enter");
}
function copy_button3() {
  /* Get the text field */
  var copyText = document.getElementById("stuff_to_copy3");

  /* Select the text field */
  copyText.select();
  copyText.onclick;
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("press Windows key + R, paste the link in, and press enter");
}
function copy_button4() {
  /* Get the text field */
  var copyText = document.getElementById("stuff_to_copy4");

  /* Select the text field */
  copyText.select();
  copyText.onclick;
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("press Windows key + R, paste the link in, and press enter");
}
function copy_button5() {
  /* Get the text field */
  var copyText = document.getElementById("stuff_to_copy5");

  /* Select the text field */
  copyText.select();
  copyText.onclick;
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("press Windows key + R, paste the link in, and press enter");
}
function copy_button6() {
  /* Get the text field */
  var copyText = document.getElementById("stuff_to_copy6");

  /* Select the text field */
  copyText.select();
  copyText.onclick;
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("press Windows key + R, paste the link in, and press enter");
}
function copy_button_iCMS_RightFax_WorkFlow_all_in_one() {
  /* Get the text field */
  var copyText = document.getElementById("stuff_to_copy_iCMS_RightFax_WorkFlow_all_in_one");

  /* Select the text field */
  copyText.select();
  copyText.onclick;
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("press Windows key + R, paste the link in, and press enter");
}

// DIV toggle with button
$(document).ready(function() {
  // hide automation_tools
  $("#new_user_tools").hide();
  $("#ACS_info").hide();
  $("#iCMS_user_add_info").hide();
  $("#RightFax_user_add_info").hide();
  $("#iCMS_RightFax_WorkFlow_all_in_one_info").hide();
  // hide investigative_tools
  $("#investigative_tools").hide();
  $("#the_watcher_info").hide();
  $("#Sleuth-system_info_info").hide();
  $("#Sleuth-user_info_info").hide();
  // hide common_issues_and_fixes
  $("#common_issues_and_fixes").hide();
  $("#RightFax_info").hide();
  $("#MODI_info").hide();

  // toggle automation_tools
  $("#automation_tools_button").click(function() {
    $("#new_user_tools").slideToggle("slow");
    // hide automation_tools
    $("#ACS_info").hide();
    $("#iCMS_user_add_info").hide();
    $("#RightFax_user_add_info").hide();
    $("#iCMS_RightFax_WorkFlow_all_in_one_info").hide();
    // hide investigative_tools
    $("#investigative_tools").hide();
    $("#the_watcher_info").hide();
    $("#Sleuth-system_info_info").hide();
    $("#Sleuth-user_info_info").hide();
    // hide common_issues_and_fixes
    $("#common_issues_and_fixes").hide();
    $("#RightFax_info").hide();
    $("#MODI_info").hide();
  });
  $("#ACS_button").click(function() {
    $("#ACS_info").slideToggle("slow");
    // hide automation_tools
    $("#iCMS_user_add_info").hide();
    $("#RightFax_user_add_info").hide();
    $("#iCMS_RightFax_WorkFlow_all_in_one_info").hide();
    // hide investigative_tools
    $("#investigative_tools").hide();
    $("#the_watcher_info").hide();
    $("#Sleuth-system_info_info").hide();
    $("#Sleuth-user_info_info").hide();
    // hide common_issues_and_fixes
    $("#common_issues_and_fixes").hide();
    $("#RightFax_info").hide();
    $("#MODI_info").hide();
  });
  $("#iCMS_user_add_button").click(function() {
    $("#iCMS_user_add_info").slideToggle("slow");
    // hide automation_tools
    $("#ACS_info").hide();
    $("#RightFax_user_add_info").hide();
    $("#iCMS_RightFax_WorkFlow_all_in_one_info").hide();
    // hide investigative_tools
    $("#investigative_tools").hide();
    $("#the_watcher_info").hide();
    $("#Sleuth-system_info_info").hide();
    $("#Sleuth-user_info_info").hide();
    // hide common_issues_and_fixes
    $("#common_issues_and_fixes").hide();
    $("#RightFax_info").hide();
    $("#MODI_info").hide();
  });
  $("#RightFax_user_add_button").click(function() {
    $("#RightFax_user_add_info").slideToggle("slow");
    // hide automation_tools
    $("#ACS_info").hide();
    $("#iCMS_user_add_info").hide();
    $("#iCMS_RightFax_WorkFlow_all_in_one_info").hide();
    // hide investigative_tools
    $("#investigative_tools").hide();
    $("#the_watcher_info").hide();
    $("#Sleuth-system_info_info").hide();
    $("#Sleuth-user_info_info").hide();
    // hide common_issues_and_fixes
    $("#common_issues_and_fixes").hide();
    $("#RightFax_info").hide();
    $("#MODI_info").hide();
  });
  $("#iCMS_RightFax_WorkFlow_all_in_one_button").click(function() {
    $("#iCMS_RightFax_WorkFlow_all_in_one_info").slideToggle("slow");
    // hide automation_tools
    $("#ACS_info").hide();
    $("#iCMS_user_add_info").hide();
    $("#RightFax_user_add_info").hide();
    // hide investigative_tools
    $("#investigative_tools").hide();
    $("#the_watcher_info").hide();
    $("#Sleuth-system_info_info").hide();
    $("#Sleuth-user_info_info").hide();
    // hide common_issues_and_fixes
    $("#common_issues_and_fixes").hide();
    $("#RightFax_info").hide();
    $("#MODI_info").hide();
  });
  // toggle investigative_tools
  $("#investigative_tools_button").click(function() {
    $("#investigative_tools").slideToggle("slow");
    // hide automation_tools
    $("#new_user_tools").hide();
    $("#ACS_info").hide();
    $("#iCMS_user_add_info").hide();
    $("#RightFax_user_add_info").hide();
    $("#iCMS_RightFax_WorkFlow_all_in_one_info").hide();
    // hide investigative_tools
    $("#the_watcher_info").hide();
    $("#Sleuth-system_info_info").hide();
    $("#Sleuth-user_info_info").hide();
    // hide common_issues_and_fixes
    $("#common_issues_and_fixes").hide();
    $("#RightFax_info").hide();
    $("#MODI_info").hide();
  });
  $("#the_watcher_button").click(function() {
    $("#the_watcher_info").slideToggle("slow");
    // hide automation_tools
    $("#new_user_tools").hide();
    $("#ACS_info").hide();
    $("#iCMS_user_add_info").hide();
    $("#RightFax_user_add_info").hide();
    $("#iCMS_RightFax_WorkFlow_all_in_one_info").hide();
    // hide investigative_tools
    $("#Sleuth-system_info_info").hide();
    $("#Sleuth-user_info_info").hide();
    // hide common_issues_and_fixes
    $("#common_issues_and_fixes").hide();
    $("#RightFax_info").hide();
    $("#MODI_info").hide();
  });
  $("#Sleuth-system_info_button").click(function() {
    $("#Sleuth-system_info_info").slideToggle("slow");
    // hide automation_tools
    $("#new_user_tools").hide();
    $("#ACS_info").hide();
    $("#iCMS_user_add_info").hide();
    $("#RightFax_user_add_info").hide();
    $("#iCMS_RightFax_WorkFlow_all_in_one_info").hide();
    // hide investigative_tools
    $("#the_watcher_info").hide();
    $("#Sleuth-user_info_info").hide();
    // hide common_issues_and_fixes
    $("#common_issues_and_fixes").hide();
    $("#RightFax_info").hide();
    $("#MODI_info").hide();
  });
  $("#Sleuth-user_info_button").click(function() {
    $("#Sleuth-user_info_info").slideToggle("slow");
    // hide automation_tools
    $("#new_user_tools").hide();
    $("#ACS_info").hide();
    $("#iCMS_user_add_info").hide();
    $("#RightFax_user_add_info").hide();
    $("#iCMS_RightFax_WorkFlow_all_in_one_info").hide();
    // hide investigative_tools
    $("#the_watcher_info").hide();
    $("#Sleuth-system_info_info").hide();
    // hide common_issues_and_fixes
    $("#common_issues_and_fixes").hide();
    $("#RightFax_info").hide();
    $("#MODI_info").hide();
  });
  // toggle common_issues_and_fixes_tools
  $("#common_issues_and_fixes_button").click(function() {
    $("#common_issues_and_fixes").slideToggle("slow");
    // hide automation_tools
    $("#new_user_tools").hide();
    $("#ACS_info").hide();
    $("#iCMS_user_add_info").hide();
    $("#RightFax_user_add_info").hide();
    $("#iCMS_RightFax_WorkFlow_all_in_one_info").hide();
    // hide investigative_tools
    $("#investigative_tools").hide();
    $("#the_watcher_info").hide();
    $("#Sleuth-system_info_info").hide();
    $("#Sleuth-user_info_info").hide();
    // hide common_issues_and_fixes
    $("#RightFax_info").hide();
    $("#MODI_info").hide();
  });
  $("#RightFax_button").click(function() {
    $("#RightFax_info").slideToggle("slow");
    // hide automation_tools
    $("#new_user_tools").hide();
    $("#ACS_info").hide();
    $("#iCMS_user_add_info").hide();
    $("#RightFax_user_add_info").hide();
    $("#iCMS_RightFax_WorkFlow_all_in_one_info").hide();
    // hide investigative_tools
    $("#investigative_tools").hide();
    $("#the_watcher_info").hide();
    $("#Sleuth-system_info_info").hide();
    $("#Sleuth-user_info_info").hide();
    // hide common_issues_and_fixes
    $("#MODI_info").hide();
  });
  $("#MODI_button").click(function() {
    $("#MODI_info").slideToggle("slow");
    // hide automation_tools
    $("#new_user_tools").hide();
    $("#ACS_info").hide();
    $("#iCMS_user_add_info").hide();
    $("#RightFax_user_add_info").hide();
    $("#iCMS_RightFax_WorkFlow_all_in_one_info").hide();
    // hide investigative_tools
    $("#investigative_tools").hide();
    $("#the_watcher_info").hide();
    $("#Sleuth-system_info_info").hide();
    $("#Sleuth-user_info_info").hide();
    // hide common_issues_and_fixes
    $("#RightFax_info").hide();
  });
});
