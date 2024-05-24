/**
 * Describes a Character exposed via the API.
 */
export type CharacterDto = {
	/**
	 * The unique identifier of the character.
	 */
	id: string;

	/**
	 * The name of the character.
	 */
	name: string;

	/**
	 * The height of the character.
	 */
	height: string;

	/**
	 * The mass of the character.
	 */
	mass: string;

	/**
	 * The hair color of the character.
	 */
	hairColor: string;

	/**
	 * The skin color of the character.
	 */
	skinColor: string;

	/**
	 * The eye color of the character.
	 */
	eyeColor: string;

	/**
	 * The year the character was born.
	 */
	birthYear: string;

	/**
	 * The gender of the character.
	 */
	gender: string;

	/**
	 * The date and time this resource was created.
	 */
	createdAt: string;

	/**
	 * The date and time this resource was last updated.
	 */
	updatedAt: string;
};
