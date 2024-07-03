"use strict";

document.addEventListener("DOMContentLoaded", function() {
    // Only the upwards relative part of a path
    function getPrefixUp(ref_path) {
        let prefix = "";
        for (let fragment of ref_path.split("/")) {
            if (fragment === "..") {
                prefix += "../";
            } else {
                break
            }
        }
        return prefix;
    }

    // Establish the current relative location to the page root by
    // inspecting how the logo is included in the page
    const logo = document.querySelector("a.navbar-brand.logo");
    if (logo == null) return;
   const refPath = logo.getAttribute("href");
    let prefix = "";
    if (refPath !== "#") {
        prefix = getPrefixUp(refPath);
    }
    prefix = prefix + "_static/icon_s/";

    // Mapping: hazard emoji -> icon
    const REPLACE = new Map([
        ["🌊", "floods.png"],
        ["🌧️", "heavy_rainfall.png"],
        ["🌡️", "heatwaves.png"],
        ["🏜️", "droughts.png"],
        ["🔥", "fire.png"],
        ["❄️", "snow.png"],
        ["💨", "wind.png"],
    ]);

    const entries = document.querySelectorAll(".bd-sidebar a.reference.internal");
    if (entries == null) return;
    // Search for emojis in replacement table and process
    for (let entry of entries) {
        for (let child of entry.childNodes) {
            if (child.nodeType === Node.TEXT_NODE) {
                const text = child.wholeText;
                for (let [needle, iconName] of REPLACE.entries()) {
                    if (text.startsWith(needle)) {
                        // Create image element for icon with relative path
                        const img = document.createElement("img");
                        img.src = prefix + iconName;
                        img.alt = "";
                        img.className = "hazard-icon";
                        // Replace emoji with icon
                        entry.replaceChildren(img, text.substr(needle.length));
                        console.log(needle, iconName, child);
                        break;
                    }
                }
            }
        }
    }

});
