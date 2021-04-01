class CharacterInfo {
    constructor({name, thumbnail, id, description}) {
        this.name = name;
        this.avatar = this.formatImage(thumbnail);
        this.id = id;
        this.description = description;
    }

    formatImage(avatar) {
        return `${avatar.path}/standard_fantastic.${avatar.extension}`;
    }
}

export { CharacterInfo };
