import jQuery from "jquery";

class Connection {
    base = null;
    constructor (base) {
        this.base = base || "127.0.0.1";
    }

    fetch(path, callback) {
        !(path.endsWith("/")) && (path += "/");

        if (callback !== undefined) {
            fetch(this.base + path)
                .then(response => response.json())
                .then(data => callback(data));
        } else return new Promise((resolve, reject) => {
            fetch(this.base + path)
                .then(response => response.json())
                .then(data => resolve(data));
        });
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

let API = new Connection("http://react.ilink.ro");

export default API;
