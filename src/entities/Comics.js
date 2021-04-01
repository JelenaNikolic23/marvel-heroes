class Comics{
    constructor({title, images, id}) {
        this.name = title;
        this.image = this.formatImage(images[0]);
        this.id = id;
    }

    formatImage(image){
        return `${image.path}/landscape_large.${image.extension}`;
    }
}

export { Comics };
