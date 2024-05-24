/**
 * Describes a Star Wars Species.
 */
export type SpeciesDto = {
	/**
	 * The unique identifier of the species.
	 */
	id: string;

	/**
	 * The name of the species.
	 */
	name: string;

	/**
	 * The classification of this species, such as "mammal" or "reptile".
	 */
	classification: string;

	/**
	 * The designation of this species, such as "sentient".
	 */
	designation: string;

	/**
	 * The average height of this species in centimeters.
	 */
	averageHeight: string;

	/**
	 * The average lifespan of this species in years.
	 */
	averageLifespan: string;

	/**
	 * A collection of eye colors present within the species.
	 */
	eyeColors: string[];

	/**
	 * A collection of hair colors present within the species.
	 */
	hairColors: string[];

	/**
	 * A collection of skin colors present within the species.
	 */
	skinColors: string[];

	/**
	 * The language commonly spoken by this species.
	 */
	language: string;

	/**
	 * The date and time this resource was created.
	 */
	createdAt: string;

	/**
	 * The date and time this resource was last updated.
	 */
	updatedAt: string;
};
