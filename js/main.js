// page fade
document.body.className += " fade-out";
$(function() {
  $("body").removeClass("fade-out");
});

// startup sound
window.onload = function() {
  document.getElementById("my_audio").play();
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
