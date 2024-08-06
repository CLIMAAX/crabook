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
    prefix = prefix + "_static/icon_s/icon_s_";

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
                        break;
                    }
                }
            }
        }
    }

});


document.addEventListener("DOMContentLoaded", function () {
    // Build dataset contents from pooch registry files

    function _registryToFiles(registry) {
        let files = [];
        let lines = registry.split("\n");
        for (let line of lines) {
            line = line.trim();
            if (line.startsWith("#")) continue;
            let [file_path, ...rest] = line.split(" ");
            files.push(file_path);
        }
        return files;
    }

    function _filesToTree(files) {
        let root = new Map();
        for (let file of files) {
            let path = file.split("/");
            let current = root;
            for (let part of path) {
                let child = current.get(part);
                if (child == null) {
                    child = new Map();
                    current.set(part, child);
                }
                current = child;
            }
        }
        return root;
    }

    function _renderedFileTree(root, base_url) {
        let ul = document.createElement("ul");
        for (let [label, children] of root.entries()) {
            let li = document.createElement("li")
            if (children.size == 0) {
                let a = document.createElement("a")
                a.href = base_url + label;
                a.textContent = label;
                li.appendChild(a);
            } else {
                let p = document.createTextNode(label + "/");
                li.appendChild(p);
                li.appendChild(_renderedFileTree(children, base_url + label + "/"))
            }
            ul.appendChild(li);
        }
        return ul;
    }

    let dfls = document.querySelectorAll(".dataset-file-list");
    if (dfls == null) return;
    for (const dfl of dfls) {
        let base_url = dfl.getAttribute("data-base-url");
        if (base_url == null) continue;
        if (!base_url.endsWith("/")) {
            base_url += "/";
        }
        let registry_url = base_url + "metadata/registry.txt";
        fetch(registry_url).then((response) => {
            dfl.innerHTML = "Loading...";
            if (!response.ok) {
                throw new Error("HTTP error: " + response.status);
            }
            return response.text();
        }).then((registry) => {
            let files = _registryToFiles(registry);
            let tree = _filesToTree(files);
            let node = _renderedFileTree(tree, base_url)
            dfl.replaceChildren(node);
        }).catch((error) => {
            dfl.innerHTML = "Error while loading file list.";
            console.error(error);
        });
    }
});
