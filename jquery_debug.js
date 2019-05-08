function debug(msg) {
    /* Find the div element with the id "debuglog"
        to display the message in */
    var log = $("#debuglog");

    if (log.length == 0) {
        // If "#debuglog" didn't exist, make a new one
        log = $("<div id='debuglog'><h1>Debug Log</h1></div>");

        // Insert the new log element at the end of the body
        log.appendTo(document.body);
    }

    // Wrap the `msg` in <pre> tags; attach it to log
    log.append($("<pre/>").text(msg));
}
