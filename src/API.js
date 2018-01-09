import jQuery from "jquery";

class Connection {
    base = null;
    constructor (base) {
        this.base = base || "127.0.0.1";
    }

    fetch(path, callback) {
        path.endsWith("/");
        if (!path.endsWith("/")) {
            path += "/";
        }

        jQuery.getJSON(this.base + path, callback);
    }

    send(data, path, callback) {
        jQuery.ajax({
            url: this.base + path,
            method: 'post',
            data: data,
            success: callback,
        });
    }
}

let API = new Connection("http://api.catalog.com");

export default API;
