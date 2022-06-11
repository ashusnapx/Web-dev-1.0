const person = {
    firstName: "Ashutosh",
    lastName: "Kumar",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    fullName: () => {
        return `${this.firstName} ${this.lastName}`;
    },

    shoutName: function () {
        setTimeout(function () {
            console.log(this.fullName());
        }, 3000);
    },

    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 3000);
    },
};
