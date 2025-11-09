class HtmlLoader {
    constructor(url) {
        this.url = url;
    }

    async load() {
        const response = await fetch(this.url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.text();
    }
}

class JsonLoader {
    constructor(url) {
        this.url = url;
    }

    async load() {
        const response = await fetch(this.url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    }
}

export { HtmlLoader, JsonLoader };