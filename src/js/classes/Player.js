


class Player {

    constructor(name) {
        this.name = name;
        this.level = 1;
        this.trollPoints = 0;
        this.communityPoints = 100;
        this.portrait = require('../../img/troll_1.png');

        this.portraits = [
            require('../../img/troll_2.png'),
            require('../../img/troll_3.png'),
            require('../../img/troll_4.png'),
            require('../../img/troll_5.png')
        ];
    }

    addPoints(trollPoints, commPoints) {
        this.trollPoints = this.trollPoints + trollPoints;
        this.communityPoints = this.communityPoints + commPoints;

        // Level up when exceeding 10 points
        if(this.trollPoints >= 10) {
            this.trollPoints = this.trollPoints - 10;
            this.addLevel();
            this.upgradePortrait();
        }

        if (this.communityPoints > 100) {
            this.communityPoints = 100;
        }
        else if (this.communityPoints < 0) {
            this.communityPoints = 0;
        }
    }

    addLevel() {
        ++this.level;
    }

    upgradePortrait () {
        if ( (this.level - 2) < this.portraits.length) {
            this.portrait = this.portraits[this.level-2];
        }
    }

    getTrollPoints() {
        return this.trollPoints;
    }

    getCommunityPoints() {
        return this.communityPoints;
    }

    getName() {
        return this.name;
    }

    getLevel() {
        return this.level;
    }

    getImgUrl () {
        return this.portrait;
    }
}

export default Player;