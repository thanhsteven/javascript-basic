const fruit = "oranage";
if (fruit === "apple") {
	console.log("You like to eat apple");
}

const fruit2 = "water melon";
switch (fruit2) {
	case "apple":
		console.log("You like to eat Apple");
		break;
	case "orange":
		console.log("You like to eat Orange");
		break;
	case "banana":
		console.log(`You like to eat ${fruit2}`);
	default:
		console.log("You like to eat Water Melon");
		break;
}
