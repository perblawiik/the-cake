class Player {

	constructor(name) {
		this.name = name;
		this.level = 1;
		this.trollPoints = 0;
		this.communityPoints = 0;
	}

	addPoints(trollPoints, commPoints) {
		this.trollPoints = this.trollPoints + trollPoints;
		this.communityPoints = this.communityPoints + commPoints;

		if(this.trollPoints >= 10) {
			this.trollPoints = this.trollPoints - 10;
			++this.level;
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
}

export default Player;