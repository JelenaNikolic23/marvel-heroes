class Hero {
    constructor(name, avatar, id) {
        this.name = name;
        this.avatar = this.formatAvatar(avatar);
        this.id = id;
    }

    formatAvatar(avatar) {
        return `${avatar.path}/portrait_uncanny.${avatar.extension}`;
    }
}

export { Hero };
